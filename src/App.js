import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Blog, NotFound } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
