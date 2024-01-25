import axios from "axios";
import { GET_ALL_COUNTRIES } from "./types";

const URL = "http://localhost:3001";

export function getAllCountries() {
  return async function (dispatch) {
    const response = await axios.get(`${URL}/countries`);
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: response.data,
    });
  };
}
