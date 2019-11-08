import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  SIGNUP
} from "./types";
import axios from "axios";

type login = {
  type: typeof LOGIN_SUCCESS | typeof LOGIN_FAIL;
  payload: any;
};

type logout = {
  type: typeof LOGOUT;
};

type loadUser = {
  type: typeof USER_LOADED | typeof USER_LOADING | typeof AUTH_ERROR;
  payload: any;
};

type registerUser = {
  type: typeof SIGNUP;
  payload: any;
};

interface Config {
  headers: any;
}

//LOGIN USER
export const login = (username: string, password: string) => (
  dispatch: any
) => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ username, password });
  console.log("Login invoked");
  axios
    .post(`http://localhost:8000/auth/login`, body, config)
    .then(resp => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp.data
      });
    })
    .catch(err => {
      alert("Incorect username or password");
      dispatch({ type: LOGIN_FAIL });
    });
};

// LOGOUT USER
export const logout = () => (dispatch: any, getState: any) => {
  console.log("LOGOUT INVOKED");

  axios
    .post(`http://localhost:8000/auth/logout/`, null, tokenConfig(getState))
    .then(resp => {
      dispatch({
        type: LOGOUT
      });
    })
    .catch(err => console.log(err));
};

// LOAD USER
export const loadUser = (): any => (dispatch: any, getState: any): any => {
  dispatch({
    type: USER_LOADING
  });

  axios
    .get(`http://localhost:8000/auth/user`, tokenConfig(getState))
    .then(resp => {
      dispatch({
        type: USER_LOADED,
        payload: resp.data
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};
// USER REGISTRATION
export const registerUser = (
  username: string,
  email: string,
  password: string
) => (dispatch: any) => {
  const config: Config = {
    headers: { "Content-type": "application/json" }
  };
  const body = JSON.stringify({ username, email, password });

  axios
    .post(`http://localhost:8000/auth/register/`, body, config)
    .then(resp =>
      dispatch({
        type: SIGNUP,
        payload: resp.data
      })
    )
    .catch(err => console.log(err));
};

//  check token & create config
const tokenConfig = (getState: any) => {
  const config: Config = {
    headers: { "Content-type": "application/json" }
  };
  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};

export type AuthActionTypes = login | logout | loadUser | registerUser;
