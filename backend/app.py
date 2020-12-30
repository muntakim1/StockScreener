from fastapi import FastAPI, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from models import models
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from pydantic import BaseModel
from models.models import Stock
import yfinance as yf

# CORS ORIGIN
origins = ["http://localhost:3000", "http://localhost:8080"]

# App
app = FastAPI()

# MODELS
models.Base.metadata.create_all(bind=engine)


# BASE MODELS
class StockRequest(BaseModel):
    symbol: str


# CORS MIDDLEWARE
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# DB SESSION

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.get('/')
async def root(db: Session = Depends(get_db)):
    """
    Main root function 
    """
    stocks = db.query(Stock).all()
    return {"data": stocks}


def fetch_stock_data(id: int):
    db = SessionLocal()
    stock = db.query(Stock).filter(Stock.id == id).first()
    stock.forward_pe = 10

    yahoo_data = yf.Ticker(stock.symbol)

    stock.ma200 = yahoo_data.info['twoHundredDayAverage']
    stock.ma50 = yahoo_data.info['fiftyDayAverage']
    stock.price = yahoo_data.info['previousClose']
    stock.forward_pe = yahoo_data.info['forwardPE']
    stock.forward_eps = yahoo_data.info['forwardEps']
    stock.dividend_yield = yahoo_data.info['dividendYield'] * 100

    db.add(stock)
    db.commit()


@app.post('/')
async def create_stock(stock_request: StockRequest,
                       background_tasks: BackgroundTasks,
                       db: Session = Depends(get_db)):

    # Adding data to Database
    stock = Stock()
    stock.symbol = stock_request.symbol
    db.add(stock)
    db.commit()

    # Background Task Queue
    background_tasks.add_task(fetch_stock_data, stock.id)

    return {
        "Code": "Success",
        "message": "Stock created"
    }


@app.get('/about')
async def about():
    return {"message": "Muntakimur Rahaman"}


@app.get('/pricing')
async def pricing():
    return {"message": "Hello World"}


@app.get('/contact')
async def contact():
    return {"message": "Hello World"}
