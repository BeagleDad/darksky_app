import React, { Component } from "react";
import UserInput from "./components/UserInput";
import darksky from "./api/darksky";
import Current from "./components/Current";
//import "./App.css";

class App extends Component {
  state = { currently: null, loading: null };
  onUserInputSubmit = async ({ lat, long }) => {
    this.setState({ loading: "loading" });
    const response = await darksky.get(`/${lat},${long}`);
    //console.log(response);
    this.setState({ currently: response.data.currently, loading: "done" });
  };

  render() {
    return (
      <div>
        <UserInput onUserInputSubmit={this.onUserInputSubmit} />
        <Current state={this.state} />
      </div>
    );
  }
}

export default App;
