import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/Header/SignIn/SignIn";
import Navigation from "./components/Header/Navigation/Navigation";
import Home from "./components/Header/Home/Home";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div>
          <Route path="/Home" render={() => <Home />} />
          <Route path="/SignIn" render={() => <SignIn />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
