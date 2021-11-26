import React, { Component } from "react";
import FunctionalProps from "./FunctionalProps";
import ClassProps from "./ClassProps";

class Props extends Component {
  render() {
    return (
      <React.Fragment>
        <FunctionalProps name="Viz" />
        <FunctionalProps name="Tim" />

        <ClassProps name="Tina" />
        <ClassProps name="Martin" />
      </React.Fragment>
    );
  }
}

export default Props;
