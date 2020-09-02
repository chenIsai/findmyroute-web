import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Privacy from "./components/privacy";
import ToS from "./components/ToS";
import Navbar from "./components/navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/privacy-policy">
          <Privacy />
        </Route>
        <Route path="/terms-of-service">
          <ToS />
        </Route>
        <Route path="/">
          <Temp />
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
