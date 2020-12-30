import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//views
import Home from "./views/Home.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";
import Pricing from "./views/Pricing.js";
//components
import NavBar from "./components/NavBar.js";
import FooterComponent from "./components/FooterComponent.js";
import { spring, AnimatedSwitch } from "react-router-transition";

import "./css/App.css";

const App = () => {
  document.title = "Stack Screener";
  function mapStyles(styles) {
    return {
      transform: `translateX(${styles.offset}%)`,
    };
  }
  function slide(val) {
    return spring(val, {
      stiffness: 125,
      damping: 16,
    });
  }
  const pageTransitions = {
    atEnter: {
      offset: -100,
    },
    atLeave: {
      offset: slide(-150),
    },
    atActive: {
      offset: slide(0),
    },
  };

  return (
    <Router className="container">
      <NavBar />
      <AnimatedSwitch
        atEnter={pageTransitions.atEnter}
        atLeave={pageTransitions.atLeave}
        atActive={pageTransitions.atActive}
        mapStyles={mapStyles}
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
      </AnimatedSwitch>
      <FooterComponent />
    </Router>
  );
};

export default App;
