import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const columns = [
  {
    name: "symbol",
    label: "symbol",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "price",
    label: "price",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "forward_pe",
    label: "forward_pe",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "forward_eps",
    label: "forward_eps",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "dividend_yield",
    label: "dividend_yield",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "ma50",
    label: "ma50",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "ma200",
    label: "ma200",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const options = {
  filterType: "checkbox",
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [symbol, setSymbol] = useState();
  const fetchData = () => {
    axios.get("http://127.0.0.1:8000").then((res) => setData(res.data.data));
  };
  useEffect(() => {
    fetchData();
    return () => {
      setData([]);
    };
  }, [setData]);
  console.log(data);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSymbol(e.target.value);
    fetchData();
  };

  const onSubmit = () => {
    axios.post("http://127.0.0.1:8000", { symbol: symbol });
    fetchData();
  };
  return (
    <div className="container">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          onChange={onChangeHandler}
          label="Add Symbol"
        />
        <Button variant="contained" onClick={onSubmit} color="primary">
          Add
        </Button>
      </form>
      <MUIDataTable
        title={"Stock Screener"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Home;
