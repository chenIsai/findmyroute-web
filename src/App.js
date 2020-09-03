import React from 'react';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";

import Privacy from "./components/privacy";
import Home from "./components/home";
import ToS from "./components/ToS";
import Navbar from "./components/navbar";


function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Switch>
        <Route path="/privacy-policy">
          <Privacy />
        </Route>
        <Route path="/terms-of-service">
          <ToS />
        </Route>
        <Route path="/findmyroute-web">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const Temp = () => {
  return (
    <div>
      <h1>TEMP</h1>
    </div>
  )
}

export default App;
