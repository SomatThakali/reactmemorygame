import React, { Component } from "react";

const Card = props => {
  return (
    <img
      style={imageStyle}
      src={require("../../images/" + props.imageUrl)}
      className="img-fluid img-thumbnail"
      alt={props.imageUrl}
      onClick={() => props.guessImage(props.id)}
    />
  );
};
const imageStyle = {
  maxHeight: "180px",
  maxWidth: "180px",
  marginLeft: "20px",
  marginRight: "20px",
  marginBottom: "10px"
};
export default Card;
