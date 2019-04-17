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
        </div>
        <h2>{profname}</h2>
        <br />
      </div>
    );
  }
}

export default ProfHeader;
