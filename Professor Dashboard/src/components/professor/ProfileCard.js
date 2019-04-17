import React, { Component } from "react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profiles">
        <a
          href="#"
          style={{ paddingRight: "15px", paddingLeft: "15px", color: "white" }}
        >
          <i class="fab fa-github" />
        </a>
        <a href="#" style={{ paddingRight: "15px", color: "white" }}>
          <i class="fab fa-linkedin-in" />
        </a>
        <a href="#" style={{ paddingRight: "15px", color: "white" }}>
          <i class="fab fa-stack-overflow" />
        </a>
        <a href="#" style={{ paddingRight: "15px", color: "white" }}>
          <i class="fab fa-twitter" />
        </a>
      </div>
    );
  }
}

export default ProfileCard;
