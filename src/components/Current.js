import React from "react";
import { Segment } from "semantic-ui-react";
import Skycons from "react-skycons";
import "../App.css";

const Current = props => {
  if (!props.state.loading) {
    return <div />;
  } else if (props.state.loading === "loading") {
    return <Segment className="teal inverted compact loading" />;
  }
  const time = new Date(props.state.currently.time * 1000);
  // Skycon expect upper case with underscores, rather than dashes
  const icon = props.state.currently.icon
    .toLocaleUpperCase()
    .replace(/-/g, "_");
  return (
    <Segment className={`teal inverted compact ${props.state.loading}`}>
      <div className="item">
        <Skycons
          style={{ width: 128 }}
          color="gold"
          icon={icon}
          autoplay
        />
      </div>

      <div>Date: {time.toLocaleDateString()}</div>
      <div>Time:{time.toLocaleTimeString()}</div>
      <div>Currently: {props.state.currently.summary}</div>
      <div>Temperature: {props.state.currently.temperature} &#8457;</div>
      <h2>Current Conditions</h2>
    </Segment>
  );
};

export default Current;
