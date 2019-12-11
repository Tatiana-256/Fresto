import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { auth } from "../../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
          {this.props.currentUser ? (
            <div
              className={classes.option}
              onClick={() => {
                auth.signOut();
              }}
            >
              SIGN OUT
            </div>
          ) : (
            <NavLink  to="/SignIn">
              SIGN IN
            </NavLink>
          )}
          
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navigation);
