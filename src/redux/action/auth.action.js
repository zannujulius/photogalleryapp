import axios from "axios";
import { errorFunc } from "../../controllers/errorController";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  SIGNUP_LOADING,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
} from "../types";
import { Navigate, useNavigate } from "react-router-dom";

export const postLogin = (data) => async (dispatch, getState) => {
  try {
    // dispatch({ type: LOGIN_LOADING });
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data
    );

    console.log(response, "response");

    if (response.data.status == 200) {
      localStorage.getItem("token", response.data.token);
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    errorFunc(err);
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const postAuthLoading = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_LOADING });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const postSignup = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: SIGNUP_LOADING });
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      data
    );
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    });
    console.log(response.data, "the response data");
    if (response.data.status == 200) {
      window.location.href = "/login";
    }
  } catch (err) {
    errorFunc(err);
    dispatch({ type: SIGNUP_FAILURE });
  }
};

export const postLoginGoogle = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_LOADING });
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
    // dispatch({
    //   type: LOGIN_SUCCESS,
    // });
  } catch (err) {
    errorFunc(err);
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const postLoginSucces = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch (err) {
    errorFunc(err);
    dispatch({ type: LOGIN_FAILURE });
  }
};
