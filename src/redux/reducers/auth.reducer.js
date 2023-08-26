import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "../types";

const initialState = {
  authLoading: false,
  authState: false,
  authFailure: false,
  items: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST":
      return {
        ...state,
        items: action.payload,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authState: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authFailure: true,
        authLoading: false,
      };
    default:
      return state;
  }
};
