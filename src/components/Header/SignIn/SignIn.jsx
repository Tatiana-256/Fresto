import React from "react";
import classes from "./SignIn.module.css";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handelChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className={classes.input}>Sign in</div>
        <div className={classes.form}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className={classes.inputForm}
                type="email"
                name="email"
                required
                placeholder="User name"
                onChange={this.handelChange}
                value={this.state.email}
              />
              <input
                className={classes.inputForm}
                type="password"
                name="password"
                placeholder="User password"
                onChange={this.handelChange}
                value={this.state.password}
                required
                minLength="6"
              />
            </div>
            <div>
              <button type="submit" className={classes.btn}>
                Sign in
              </button>
              <button onClick={signInWithGoogle} className={classes.btn}>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
