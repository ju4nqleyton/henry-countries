import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_FAILURE,
} from "./types";

const initialState = {
  allCountries: [],
  allCountriesCopy: [],
  country: [],
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
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: payload,
      };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        allCountries: [...state.allCountries, payload],
        allCountriesCopy: [...state.allCountriesCopy, payload],
      };
    case CREATE_ACTIVITY_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
