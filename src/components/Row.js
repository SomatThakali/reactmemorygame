import React from "react";

const Row = props => {
  return (
    <div className="row" style={rowStyle}>
      {props.children}
    </div>
  );
};

const rowStyle = {
  marginLeft: "70px",
  marginRight: "70px"
};
export default Row;
