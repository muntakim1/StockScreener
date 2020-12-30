import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
//views
import Home from "./views/Home.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";
import Pricing from "./views/Pricing.js";
//components
import NavBar from "./components/NavBar.js";
import FooterComponent from "./components/FooterComponent.js";
import { AnimatedSwitch } from "react-router-transition";

import "./css/App.css";

import { PageNotFound } from "./components/PageNotFound.js";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  document.title = "Stack Screener";

  return (
    <Router className="container">
      <NavBar />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
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
        <Route>
          <PageNotFound />
        </Route>
      </AnimatedSwitch>
      <FooterComponent />
    </Router>
  );
};

export default App;
