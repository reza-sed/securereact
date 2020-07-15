import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import Profile from "./components/Profile";
import Nav from "./Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Route path="/user" component={User} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
