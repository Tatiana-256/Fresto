import React from "react";
import classes from "./SignIn.module.css";

class SignIn extends React.Component {
  render(props) {
    return (
      <div>
        <div className={classes.input}>Sign in</div>
        <div className={classes.form}>
          <div>
            <input
              className={classes.inputForm}
              type="email"
              required
              placeholder="User name"
            />
            <input
              className={classes.inputForm}
              type="password"
              placeholder="User password"
              required
              minlength="6"
            />
          </div>
          <div>
            <button className={classes.btn}>Sign in</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
