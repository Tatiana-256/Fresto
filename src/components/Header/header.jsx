import React from "react";
import classes from "./header.module.css";
import Navigation from "./Navigation/Navigation";

class Header extends React.Component {
  render(props) {
    return (
      <div>
        <header>
          <div>
            <Navigation />
          </div>
          <div className={classes.hero_text_box}>
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
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
