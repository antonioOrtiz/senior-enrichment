import React, { Component } from "react";
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StudentViewContainer from "../containers/StudentViewContainer"
import store from "../store"

// import Students from "./Students";
// import Campuses from "./Campuses";

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {}; // no kittens yet * example
  }
  render() {
    return (
      <Provider store={store}>
        <StudentViewContainer />
      </Provider>
    );
  }
}
