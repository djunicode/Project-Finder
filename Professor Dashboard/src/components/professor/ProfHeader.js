import React, { Component } from "react";

class ProfHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profname: "Professor"
    };
  }

  render() {
    const { profname } = this.state;
    return (
      <div className="profheader">
        <br />
        <div>
          <div className="profdp" />
          <div style={{ marginLeft: "25%" }}>
            <a href="#" style={{ color: "white" }}>
              <i class="fas fa-pen" />
            </a>
          </div>
        </div>
        <h2>{profname}</h2>
        <br />
      </div>
    );
  }
}

export default ProfHeader;
