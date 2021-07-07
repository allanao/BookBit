import React, { Component } from "react";
import '../prettify.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./login.jsx";
import Signup from "./signup.jsx";

class Page extends Component {
    render() {
        return (
            <Router>
                <Link to="/login">Log in.</Link>
                <Link to="/signup">Sign up.</Link>
                <Switch>
                <Route path="/login">
                    <Log />
                </Route>
                <Route path="/signup">
                    <Sign />
                </Route>
                </Switch>
            </Router>
        );
    }
}

function Log() {
    return (
      <Login />
  );
}

function Sign() {
    return (
      <Signup />
  );
}


export default Page;