import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";
import SignupForm from "./components/SignupForm";
class App extends Component {
  onAdd(user) {
    console.log("...onClick", user);
    const json = JSON.stringify(user); // js {} to json
    window.localStorage.setItem("user", json);
  }
  render() {
    // console.log("props", this.store);
    return (
      <div>
        <SignupForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
