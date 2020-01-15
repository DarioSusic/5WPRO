import axios from 'axios';
//import { setAlert } from './alert';

import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  CLEAR_PRODUCT
} from './types';

//Get product by ID
export const getProductById = productId => async dispatch => {
  try {
    const res = await axios.get(`api/product/${productId}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all products
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};
