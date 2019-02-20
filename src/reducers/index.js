import { FETCH_FORECAST } from "../actions/types";

const initialState = { forecastData: {}, loading: false };
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      return { ...state, forecastData: action.payload, loading: true };
    default:
      return state;
  }
};

export default rootReducer;
