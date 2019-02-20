import { FETCH_FORECAST } from "./types";
import darksky from "../api/darksky";

export const fetchForecast = () => async dispatch => {
  const lat = 38.434292;
  const long = -122.662107;
  const response = await darksky.get(`/${lat},${long}`);
  //console.log(response.data);
  dispatch({ type: FETCH_FORECAST, payload: response.data });
};
