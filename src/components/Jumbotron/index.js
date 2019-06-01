import React, { Component } from "react";

const jumbotron = () => {
  return (
    <div className="jumbotron" style={jumbotronStyle}>
      <h1 className="display-4 text-center mb-4 font-weight-bold">
        Clicky Game!
      </h1>
      <h3 className="mt-4 text-center">
        Click on an image to earn points, but don't click on any more than once!
      </h3>
    </div>
  );
};
const jumbotronStyle = {
  marginTop: "100px",
  paddingTop: "100px",
  paddingBottom: "100px"
};

export default jumbotron;
