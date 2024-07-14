import axios from "axios";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_FAILURE,
} from "./types";

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

export function getCountryById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/countries/${id.toUpperCase()}`);
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function createActivity(activity) {
  return async function (dispatch) {
    try {
      const { name, difficulty, duration_hours, season } = activity;

      if (!name || !difficulty || !duration_hours || !season) {
        throw new Error("All fields are required");
      }

      const response = await axios.post(`${URL}/activities`, activity);
      dispatch({
        type: CREATE_ACTIVITY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ACTIVITY_FAILURE,
        payload: error.message,
      });
    }
  };
}
