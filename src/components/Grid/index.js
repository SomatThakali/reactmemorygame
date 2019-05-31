import React from "react";

export const Row = props => {
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

export const Container = props => {
  return <div className="container">{props.children}</div>;
};

// export default Container;

// export default Row;
