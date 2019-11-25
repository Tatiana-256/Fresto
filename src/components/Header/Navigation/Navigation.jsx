import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render(props) {
    return (
      <div>
        <ul className={classes.nav}>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/How-it-works">How it works</NavLink>
          </li>
          <li>
            <NavLink to="/Our-cities">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/SignIn">Sign in</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
