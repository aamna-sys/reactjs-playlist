import React from "react";

const FunctionalProps = (props) => {
  return (
    <React.Fragment>
      <h1>Hello, {props.name} from functional component!</h1>
    </React.Fragment>
  );
};

export default FunctionalProps;
