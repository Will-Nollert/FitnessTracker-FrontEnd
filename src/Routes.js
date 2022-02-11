import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Routines from "./containers/Routines";
import Activities from "./containers/Activities";
import AuthRoutines from "./containers/AuthRoutines";
import AuthActivities from "./containers/AuthActivities";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/Signup">
        <Signup />
      </Route>
      <Route exact path="/Routines">
        <Routines />
      </Route>
      <Route exact path="/Activities">
        <Activities />
      </Route>
      <Route exact path="/AuthRoutines">
        <AuthRoutines />
      </Route>
      <Route exact path="/AuthActivities">
        <AuthActivities />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
