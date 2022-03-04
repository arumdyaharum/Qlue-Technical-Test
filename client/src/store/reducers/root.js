import { FETCH_DATA } from "../actionTypes";

const initialState = {
  baseURL: 'http://localhost:3000',
  data: [],
};

function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;