import { FETCH_FORECAST, FETCH_STARTED } from "./types";
import darksky from "../api/darksky";

export const fetchForecast = ({ lat, long }) => async dispatch => {
  dispatch({ type: FETCH_STARTED });
  const response = await darksky.get(`/${lat},${long}`);
  //console.log(response.data);
  dispatch({ type: FETCH_FORECAST, payload: response.data });
};
