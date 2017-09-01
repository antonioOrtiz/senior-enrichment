import React, { Component } from "react";
import Students from "./Students";
import StudentForm from "./StudentForm";
import store from "../store";

import { fetchStudents } from "../reducers";

export default class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Students students={this.state.students} />
        <StudentForm />
      </div>
    );
  }
}
