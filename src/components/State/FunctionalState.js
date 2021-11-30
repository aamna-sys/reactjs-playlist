import React, { useState } from "react";

const FunctionalState = () => {
  const [heading, setHeading] = useState("Hello, visitor!");

  const clickHandler = () => {
    setHeading("Thank You for Subscribing!");
  };

  return (
    <React.Fragment>
      <h1>{heading}</h1>
      <button onClick={clickHandler}>Subscribe</button>
    </React.Fragment>
  );
};

export default FunctionalState;
