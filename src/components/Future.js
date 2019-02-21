import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import Skycons from "react-skycons";

const Future = ({ data, loading }) => {
  if (loading) {
    return <div />;
  } /* else if (loading === "loading") {
    return <Segment className="teal inverted compact loading" />;
  } */
  //console.log(props.state.data);
  const time = new Date(data.time * 1000);
  // Skycon expect upper case with underscores, rather than dashes
  const icon = data.icon.toLocaleUpperCase().replace(/-/g, "_");
  return (
    <Grid.Column color="brown">
      <div className="item">
        <Skycons style={{ width: 64 }} color="orange" icon={icon} autoplay />
      </div>

      {/* <div>Date: {time.toLocaleDateString()}</div> */}
      <div>{time.toLocaleTimeString()}</div>
      <div>{data.summary}</div>
      <div>{data.temperature} &#8457;</div>
      <div>{Math.round(data.precipProbability*100)}%</div>
    </Grid.Column>
  );
};

export default Future;
