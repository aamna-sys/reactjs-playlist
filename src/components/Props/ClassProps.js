import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return <h1>Hello, {this.props.name} from class component!</h1>;
  }
}

export default ClassProps;
