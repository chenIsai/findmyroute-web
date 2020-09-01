import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Privacy from "./components/privacy";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/privacy-policy">
          <Privacy />
        </Route>
        <Route path="/terms-of-service">
          <Temp />
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
