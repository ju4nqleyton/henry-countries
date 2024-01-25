import { GET_ALL_COUNTRIES } from "./types";

const initialState = {
  allCountries: [],
  allCountriesCopy: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        allCountriesCopy: payload,
      };
    default:
      return state;
  }
};

export default reducer;
