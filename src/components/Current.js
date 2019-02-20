import React from "react";
import { Segment } from "semantic-ui-react";
import Skycons from "react-skycons";

const Current = props => {
  if (!props.state.loading) {
    return <div />;
  }/*  else if (props.state.loading === "loading") {
    return <Segment className="teal inverted compact loading" />;
  } */
  const time = new Date(props.state.data.currently.time * 1000);
  // Skycon expect upper case with underscores, rather than dashes
  const icon = props.state.data.currently.icon
    .toLocaleUpperCase()
    .replace(/-/g, "_");
  return (
    <Segment className="teal inverted compact">
      <div className="item">
        <Skycons style={{ width: 128 }} color="gold" icon={icon} autoplay />
      </div>

      <div>Date: {time.toLocaleDateString()}</div>
      <div>Time:{time.toLocaleTimeString()}</div>
      <div>Currently: {props.state.data.currently.summary}</div>
      <div>Temperature: {props.state.data.currently.temperature} &#8457;</div>
      <h2>Current Conditions</h2>
    </Segment>
  );
};

export default Current;
