import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SignIn from "./components/Header/SignIn/SignIn";
import Navigation from "./components/Header/Navigation/Navigation";
import Home from "./components/Header/Home/Home";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { connect } from "react-redux";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState( {currentUser: user});
      //createUserProfileDocument(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //   userRef.onSnapshot(snapShot => {
        //     this.setState({
        //       currentUser: {
        //         id: snapShot.id,
        //         ...snapShot.data()
        //       }
        //     });
        //   });
        // } else {
        //   this.setState({ currentUser: userAuth });
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <BrowserRouter>
    <div className="App">
      <Navigation />
      <div>
        <Route path="/Home" render={() => <Home />} />
        <Route
        exact
        path="/signin"
        render={() =>
          this.props.currentUser ? (
            <Redirect to="/" />
          ) : (
            <SignIn />
          )
        }
      />
      </div>
    </div>
  </BrowserRouter>
  );
}
  
  
 
 
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispathcToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispathcToProps)(App);
