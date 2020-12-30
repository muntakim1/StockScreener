import React from "react";

const GifObject = () => {
  const url =
    "https://global.markets.com/wp-content/uploads/sites/16/2019/12/Coin-Shadow.gif";
  return (
    <div>
      <img
        src={url}
        style={{
          width: "56px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></img>
    </div>
  );
};

export default GifObject;
