import React from "react";
// import classes from "./header.module.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
// import SignIn from "./SignIn/SignIn";

import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class Header extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    const user = this.props.currentUser;
  }
  render(props) {
    return (
      <div>
        <header>
          <div>
            <Navigation />
          </div>
          <div>
            <Home />
          </div>
          {/* <div className={classes.hero_text_box}>
            <h1>
              Try to do it
              <br />
              Open yourself for world
            </h1>
            <a className={classes.btn} href="#">
              random text
            </a>
            <a className={classes.btn} href="#">
              random text
            </a>
          </div> */}
        </header>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state)
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispathcToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispathcToProps)(Header);
