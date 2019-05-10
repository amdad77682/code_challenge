import axios from "../../config/network";
import { baseUrl } from "../../config/apiUrl";
import { store } from "../../../store";
export const getAlbumsData = callback => {
  console.log("url", baseUrl.albums);

  return dispatch => {
    dispatch({
      type: "GET_ALBUMS_PENDING",
      url: baseUrl.albums
    });
    axios
      .get(baseUrl.albums)
      .then(res => {
        dispatch({
          type: "GET_ALBUMS_RESOLVED",
          payload: res.data
        });
        callback(null, res.data);
      })
      .catch(e => {
        dispatch({ type: "GET_ALBUMS_FAILED", payload: e });
        callback(e, null);
      });
  };
};
