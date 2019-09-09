import { FETCH_ITEMS } from "../actions/types";

const initialState = {
  title: "",
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        title: action.title,
        items: action.payload
      };
    default:
      return state;
  }
}
