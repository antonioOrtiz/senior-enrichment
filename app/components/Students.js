import React, { Component } from "react";
import store from "../store";
import { deleteStudent } from "../reducers";

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  deleteStudent(index) {
    store.dispatch(deleteStudent(index));
    this.state = store.getState();
  }

  render() {
    var students = this.props.students;
    return (
      <div className="container">
        <div className="sixteen columns">
          <h1 className="remove-bottom">Students</h1>
          <h5>List of current students and their campus</h5>
          <hr />
        </div>
        <div className="sixteen columns">
          <div className="example">
            <div>
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(function(student, index) {
                    return (
                      <tr key={index}>
                        <td>
                          {student.id}
                        </td>
                        <td>
                          {student.name}
                        </td>
                        <td>
                          {student.email}
                        </td>
                        <td>
                          {student.campus}
                        </td>
                        <td>
                          <a
                            className="button button-icon"
                            onClick={() => {
                              console.log(student.id);
                              this.deleteStudent(student.id);
                            }}
                            key={index}
                          >
                            <i className="fa fa-remove" />
                          </a>
                        </td>
                      </tr>
                    );
                  }, this)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
