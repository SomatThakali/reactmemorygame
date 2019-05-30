import React from "react";

const Row = props => {
  return (
    <div className="row" style={rowStyle}>
      {props.children}
    </div>
  );
};

const rowStyle = {
  marginLeft: "40px",
  marginRight: "40px"
};
export default Row;
