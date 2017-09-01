import React, { Component } from "react";
import store from "../store";
import { postStudent } from "../reducers";

const blankFormState = {
  name: "",
  email: "",
  campus: ""
};

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = blankFormState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(postStudent(this.state));
    this.setState(blankFormState);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="four columns">
                  <label>Name</label>
                  <input
                    className="u-full-width"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="four columns">
                  <label>Email</label>
                  <input
                    className="u-full-width"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="four columns">
                  <label>Campus</label>
                  <input
                    className="u-full-width"
                    type="text"
                    name="campus"
                    value={this.state.campus}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <input className="button-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
