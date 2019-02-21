import React, { Component } from "react";
import UserInput from "./UserInput";
import Current from "./Current";
import Forecast from "./Forecast";
import "./App.css";
import { connect } from "react-redux";
import { fetchForecast } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchForecast({ lat: 38.434292, long: -122.662107 });
  }
  render() {
    //if (!this.props.loading) return <div>loading...</div>;

    return (
      <div>
        <UserInput onUserInputSubmit={this.props.fetchForecast} />
        <Current  />
        <Forecast />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchForecast }
)(App);
