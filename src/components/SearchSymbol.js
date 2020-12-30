import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const SearchSymbol = () => {
  const [symbol, setSymbol] = useState("");
  const classes = useStyles();

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSymbol(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000", { symbol: symbol })
      .then((res) => console.log(res.data))
      .catch((error) => alert(error.response.data.detail));
    setSymbol("");
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        onChange={onChangeHandler}
        label="Add Symbol"
        value={symbol}
        inputProps={{ style: { textTransform: "capitalize" } }}
      />
      <Button variant="contained" onClick={onSubmit} color="primary">
        Add
      </Button>
    </form>
  );
};

export default SearchSymbol;
