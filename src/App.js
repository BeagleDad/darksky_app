import React, { Component } from "react";
import UserInput from "./components/UserInput";
import darksky from "./api/darksky";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
//import "./App.css";

class App extends Component {
  state = { data: null, loading: null };
  onUserInputSubmit = async ({ lat, long }) => {
    this.setState({ loading: "loading" });
    const response = await darksky.get(`/${lat},${long}`);
    console.log(response.data);
    this.setState({ data: response.data, loading: "done" });
  };

  render() {
    return (
      <div>
        <UserInput onUserInputSubmit={this.onUserInputSubmit} />
        <Current state={this.state} />
        <Forecast
          data={this.state.data}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
