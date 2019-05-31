import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="bg-dark" style={footerStyle}>
        <h3 className="text-center text-white">Clicky Game</h3>
      </div>
    );
  }
}

const footerStyle = {
  left: "0",
  bottom: "0",
  width: "100%",
  height: "80px",
  marginTop: "60px",
  paddingTop: "30px"
};

export default Footer;
