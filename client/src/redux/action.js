import axios from "axios";
import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME } from "./types";

const URL = "http://localhost:3001";

export function getAllCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/countries`);
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function getAllCountriesByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/countries/name?name=${name}`);
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}
