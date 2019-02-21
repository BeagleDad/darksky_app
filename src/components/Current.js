import { connect } from "react-redux";
import React from "react";
import { Segment } from "semantic-ui-react";
import Skycons from "react-skycons";

const Current = props => {
  console.log(props);
  if (props.loading) {
    return <div>Current loading...</div>;
  } /*  else if (props.state.loading === "loading") {
    return <Segment className="teal inverted compact loading" />;
  } */
  const time = new Date(props.data.currently.time * 1000);
  // Skycon expect upper case with underscores, rather than dashes
  const icon = props.data.currently.icon
    .toLocaleUpperCase()
    .replace(/-/g, "_");
  return (
    <Segment className="teal inverted compact">
      <div className="item">
        <Skycons style={{ width: 128 }} color="gold" icon={icon} autoplay />
      </div>

      <div>Date: {time.toLocaleDateString()}</div>
      <div>Time:{time.toLocaleTimeString()}</div>
      <div>Currently: {props.data.currently.summary}</div>
      <div>Temperature: {props.data.currently.temperature} &#8457;</div>
      <h2>Current Conditions</h2>
    </Segment>
  );
};
const mapStateToProps = state => {
  return { data: state.forecastData, loading: state.loading };
};

export default connect(mapStateToProps)(Current);
