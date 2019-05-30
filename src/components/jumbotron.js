import React, { Component } from "react";

export class jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4 text-center mb-4 font-weight-bold">
          Clicky Game!
        </h1>
        <h2 className="mt-4 text-center">
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
      </div>
    );
  }
}

export default jumbotron;
