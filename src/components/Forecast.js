import React from "react";
import { connect } from "react-redux";

import { Segment, Grid } from "semantic-ui-react";
import Future from "./Future";

const Forecast = props => {
  if (props.loading) {
    return <div />;
  }

  const data = props.data.hourly.data.map(datum => {
    return <Future data={datum} loading={props.loading} key={datum.time} />;
  });
  return (
    <div>
      <Segment>Forecast: {props.data.hourly.summary}</Segment>
      <Grid>{data}</Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return { data: state.forecastData, loading: state.loading };
};

export default connect(mapStateToProps)(Forecast);
