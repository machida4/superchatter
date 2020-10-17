import React from "react";
import Card from "./Card";
import ExportButton from "./ExportButton";
import default_icon from "./default.jpg";
import "./App.css";

import firebase from "./Firebase";
import SignInScreen from "./SignInScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user: user,
      });
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    const defaultName = "sample";

    if (this.state.loading) {
      return <div>loading</div>;
    }

    return (
      <div className="App">
        <div className="userName">
          Username: {this.state.user && this.state.user.displayName}
        </div>
        {this.state.user ? (
          <div className="logOutButton">
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <SignInScreen />
        )}
        <Card
          displayName={
            this.state.user ? this.state.user.displayName : defaultName
          }
          photoURL={this.state.user ? this.state.user.photoURL : default_icon}
        />
        <ExportButton />
      </div>
    );
  }
}

export default App;
