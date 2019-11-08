import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  SIGNUP
} from "../actions/types";

import { AuthActionTypes } from "../actions/auth";

interface User {
  id: number;
  username: string;
  email: string;
}

export interface authState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User;
  token: string;
}

const initState: authState = {
  isAuthenticated: null,
  isLoading: false,
  user: null,
  token: localStorage.getItem("token")
};

function authReducer(state = initState, action: AuthActionTypes): authState {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
    case SIGNUP:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        ...action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null
      };

    default:
      return state;
  }
}
export default authReducer;
