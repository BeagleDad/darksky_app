import React from "react";

import { Segment } from "semantic-ui-react";
import Future from "./Future";

const Forecast = props => {
  if (!props.loading) {
    return <div />;
  } else if (props.loading === "loading") {
    return <Segment className="grey inverted loading" />;
  }

  console.log(props.data);
  const data = props.data.hourly.data.map(datum => {
    return <Future data={datum} loading={props.loading} />;
  });
  return <Segment className="grey inverted">{data}</Segment>;
};

export default Forecast;
