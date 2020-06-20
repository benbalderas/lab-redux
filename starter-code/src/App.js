import React from "react";
import "./App.css";
import { withRouter } from "react-router";
import Routes from "./Routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
