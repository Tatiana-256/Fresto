import React from "react";
import classes from "./Navigation.module.css";

class Navigation extends React.Component {
  render(props) {
    return (
      <div>
        <ul className={classes.nav}>
          <li>
            <a href="#">Food delivery</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Our cities</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
