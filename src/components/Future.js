import React from "react";
import { Segment } from "semantic-ui-react";
import Skycons from "react-skycons";

const Future = ({ data, loading }) => {
  if (!loading) {
    return <div />;
  } else if (loading === "loading") {
    return <Segment className="teal inverted compact loading" />;
  }
  //console.log(props.state.data);
  const time = new Date(data.time * 1000);
  // Skycon expect upper case with underscores, rather than dashes
  const icon = data.icon.toLocaleUpperCase().replace(/-/g, "_");
  return (
    <Segment className="brown inverted compact">
      <div className="item">
        <Skycons style={{ width: 128 }} color="orange" icon={icon} autoplay />
      </div>

      <div>Date: {time.toLocaleDateString()}</div>
      <div>Time:{time.toLocaleTimeString()}</div>
      <div>Currently: {data.summary}</div>
      <div>Temperature: {data.temperature} &#8457;</div>
    </Segment>
  );
};

export default Future;
