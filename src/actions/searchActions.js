import { FETCH_ITEMS } from "./types";
import axios from "axios";

let cancel = "";

export const fetchItems = title => dispatch => {
  if (cancel) {
    cancel.cancel();
  }
  cancel = axios.CancelToken.source();
  axios
    .get(`http://openlibrary.org/search.json?q=${title}`, {
      cancelToken: cancel.token
    })
    .then(res =>
      dispatch({
        type: FETCH_ITEMS,
        title: title,
        payload: res.data.docs
      })
    )
    .catch(error => {
      if (axios.isCancel(error) || error) {
        return error;
      }
    });
};
