import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dati from "./components/Dati";
import Result from "./components/Result";
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dati" component={Dati} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    );
  }
}
