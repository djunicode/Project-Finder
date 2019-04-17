import React, { Component } from "react";
import Hackmultiform from "./Hackmultiform";
class HackathonForm extends Component {
  render() {
    console.log(this.props.val);
    return (
      <div className="hform">
        <form>
          <div className="hformlab">
            <label htmlFor="name">Hackathon name:</label>
            <br />
            <br />
            <br />
            <label htmlFor="tlead">Team leader:</label>
            <br />
            <br />
            <br />
            <label htmlFor="nom">Number of members:</label>
            <br />
            <br />
            <br />
            <label htmlFor="tdesc">Team description:</label>
            <br />
            <br />
            <br />
            <label htmlFor="requesthform">Send Request to:</label>
            <br />
            <br />
            <br />
            <label htmlFor="skills">Skills you're looking for:</label>
            <br />
            <br />
            <br />
          </div>
          <div className="hforminp">
            <div className="input">
              <input type="text" id="name" />
              <br />
              <br />

              <input type="text" id="tlead" />
              <br />
              <br />
              <input type="text" id="nom" />
              <br />
              <br />
              <input type="text" id="tdesc" />
              <br />
              <br />
              <select id="requesthform">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>

              <Hackmultiform />
            </div>
          </div>

          <button type="submit">Create Team</button>
        </form>
      </div>
    );
  }
}

export default HackathonForm;
