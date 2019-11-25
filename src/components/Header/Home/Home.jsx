import React from "react";
import classes from "./Home.module.css";

class Home extends React.Component {
  render(props) {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
