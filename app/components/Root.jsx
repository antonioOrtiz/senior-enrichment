import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StudentContainer from "./StudentContainer";

// import Students from "./Students";
// import Campuses from "./Campuses";

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {}; // no kittens yet * example
  }
  render() {
    return (
      <div>
        <StudentContainer />
      </div>
    );
  }
}
