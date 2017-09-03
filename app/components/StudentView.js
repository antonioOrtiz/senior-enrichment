import React, { Component } from "react";
import Students from "./Students";
import StudentForm from "./StudentForm";
import store from "../store";

export default class StudentView extends Component {

  componentDidMount() {
    const { fetchStudents } = this.props
  }

  render() {
    const { students } = this.props

    return (
      <div>
        <Students students={this.state.students} />
        <StudentForm />
      </div>
    );
  }
}
