import React from "react";
import SearchSymbol from "../components/SearchSymbol";

import TableData from "../components/TableData";

const Home = () => {
  return (
    <section id="about" className="container team">
      <SearchSymbol></SearchSymbol>
      <TableData />
      <div styles={{ height: "100vh" }}></div>
    </section>
  );
};

export default Home;
