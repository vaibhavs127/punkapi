import React from "react";
import Data from "./components/DataItems/DataItems";
import NavBar from "./components/NavBar/NavBar";
import Favorite from "./components/DataItems/Favorite";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/Favorite" component={Favorite} />
        </Switch>
        <Data />
      </div>
    </Router>
  );
}

export default App;
