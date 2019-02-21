import { FETCH_FORECAST, FETCH_STARTED } from "../actions/types";

const initialState = { forecastData: {}, loading: true, dataReady: false };
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      return { ...state, forecastData: action.payload, loading: false };
    case FETCH_STARTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default rootReducer;
