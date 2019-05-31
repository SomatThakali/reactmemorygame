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
            <li
              className={
                this.props.message.indexOf("Wrong") !== -1
                  ? "incorrectMessage"
                  : this.props.message.indexOf("Right") !== -1
                  ? "correctMessage"
                  : "normalMessage"
              }
            >
              {this.props.message}
            </li>
            <li>
              Score: {this.props.score} | Top Score: {this.props.topScore}
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Nav;
