import React, { Component } from "react";
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <header>
        <div className="navBar">
          <ul>
            <li className="home">
              <a href="/">Clicky Game</a>
            </li>
            <li>Click an Image to begin!</li>
            <li>Score: 0 | Top Score: 0</li>
          </ul>
        </div>
      </header>
    );
  }
}
const li = {
  display: "inline",
  padding: "30px",
  fontSize: "25px"
};
export default Nav;
