import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
const columns = [
  {
    name: "id",
    label: "id",
    options: {
      filter: true,
      sort: true,
    },
  },
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

const TableData = () => {
  const [data, setData] = useState();
  async function fetchData() {
    await axios
      .get("http://127.0.0.1:8000")
      .then((res) => setData(res.data.data));
  }
  useEffect(() => {
    fetchData();
    // Interval for calling the function in every 5 seconds
    const interval = setInterval(() => fetchData(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MUIDataTable
      title={"Stock Screener"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default TableData;
