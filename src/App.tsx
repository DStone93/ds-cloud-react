import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./Components/HomePage/HomePage";
// import './style.scss';

export default function DStone(props: {}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
