import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // artists: [],
      // inputValue: ""
    };
    // this.handleChange = this.handleChange.bind(this); // don't forget this!
  }

  // componentDidMount() {
  //   axios.get("/api/artists/").then(res => res.data).then(artists => {
  //     this.setState({
  //       artists
  //     });
  //   });
  // }

  // handleChange(event) {
  //   this.setState({
  //     inputValue: event.target.value
  //   });
  // }

  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="six columns">
              <label>Your email</label>
              <input
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
              />
            </div>
            <div className="six columns">
              <label>Reason for contacting</label>
              <select className="u-full-width" id="exampleRecipientInput">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
              </select>
            </div>
          </div>
          <label>Message</label>
          <textarea
            className="u-full-width"
            placeholder="Hi Dave"
            id="exampleMessage"
          />
          <label className="example-send-yourself-copy">
            <input type="checkbox" />
            <span className="label-body">Send a copy to yourself</span>
          </label>
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
