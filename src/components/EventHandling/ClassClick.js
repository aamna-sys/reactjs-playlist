import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked");
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.clickHandler}>Click</button>
      </React.Fragment>
    );
  }
}

export default ClassClick;
