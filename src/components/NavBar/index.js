import React from "react";
import "./Nav.css";

const Nav = props => {
  return (
    <header>
      <div className="navBar">
        <ul>
          <li className="home">
            <a href="/">Clicky Game</a>
          </li>
          <li
            className={
              props.message.indexOf("Wrong") !== -1
                ? "incorrectMessage"
                : props.message.indexOf("Right") !== -1
                ? "correctMessage"
                : "normalMessage"
            }
          >
            {props.message}
          </li>
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
