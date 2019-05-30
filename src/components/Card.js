import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <img
        style={imageStyle}
        src={require("../images/" + this.props.image)}
        className="img-fluid img-thumbnail"
        alt="logo"
      />
    );
  }
}

const imageStyle = {
  maxHeight: "200px",
  maxWidth: "200px",
  marginLeft: "20px",
  marginRight: "20px",
  marginBottom: "10px"
};
export default Card;
