import React, { Component } from "react";

import "../css/styles.css";

class ProfileHeader extends Component {
  state = {};
  render() {
    return (
      <div className="profile-header  ">
        <h2 style={{ color: "white", fontWeight: 400, fontSize: "64px" }}>
          Projects & Hackathons
        </h2>
      </div>
    );
  }
}

export default ProfileHeader;
