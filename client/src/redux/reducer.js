import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME } from "./types";

const initialState = {
  allCountries: [],
  allCountriesCopy: [],
  resetCards: "off",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        allCountriesCopy: payload,
      };
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountriesCopy: payload,
        resetCards: "name",
      };
    default:
      return state;
  }
};

export default reducer;
