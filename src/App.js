import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//views
import Home from "./views/Home.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";
import Pricing from "./views/Pricing.js";
//components
import NavBar from "./components/NavBar.js";

const App = () => {
  document.title = "Stack Screener";
  return (
    <Router className="container">
      <NavBar />
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
    </Router>
  );
};

export default App;
