//Write the action creator functions here

import {
  EDIT_PRODUCT_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

import axios from "axios";
export const getProductRequest = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

export const getProductFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

export const getProductSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const updateProductRequest = () => {
  return { type: EDIT_PRODUCT_REQUEST };
};

export const updateProductFailure = () => ({
  type: EDIT_PRODUCT_FAILURE,
});

export const updateProductSuccess = (payload) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload,
});

export const getProductData = (params) => (dispatch) => {
  dispatch(getProductRequest());
  axios
    .get("/products", params)
    .then((r) => {
      dispatch(getProductSuccess(r.data));
    })
    .catch((err) => dispatch(getProductFailure()));
};
