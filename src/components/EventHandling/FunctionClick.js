import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Clicked");
  }
  return (
    <React.Fragment>
      <button onClick={clickHandler}>Click</button>
    </React.Fragment>
  );
}

export default FunctionClick;
