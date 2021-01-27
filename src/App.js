import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <UsersPage />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
