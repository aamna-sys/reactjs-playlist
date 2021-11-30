import React, { Component } from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback state:", this.state.count);
      }
    );

    // Old count as setState is asynchronous. State updates are scheduled and are not done instantly.
    console.log("Old state:", this.state.count);
  }

  // increment() {
  //   this.setState((prevState, props) => ({
  //     count: prevState.count + 1,
  //   }));
  // }

  render() {
    return (
      <React.Fragment>
        <p>Count - {this.state.count}</p>
        <button onClick={() => this.increment()}>Add</button>
      </React.Fragment>
    );
  }
}

export default ClassState;
// Subscribe Message
// import React, { Component } from "react";

// class ClassState extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "Hello, visitor!",
//     };
//   }

//   clickHandler() {
//     this.setState({
//       message: "Thank You for Subscribing!",
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.clickHandler()}>Subscribe</button>
//       </React.Fragment>
//     );
//   }
// }

// export default ClassState;
