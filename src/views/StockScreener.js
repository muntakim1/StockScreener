import React from "react";
import SearchSymbol from "../components/SearchSymbol";

import TableData from "../components/TableData";
const StockScreener = () => {
  return (
    <section className="team container mt-5">
      <SearchSymbol></SearchSymbol>
      <TableData />
    </section>
  );
};

export default StockScreener;
