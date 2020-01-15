import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  DELETE_PRODUCT
} from './types';

//Get product by ID
export const getProductById = id => async dispatch => {
  try {
    const res = await axios.get(`api/products/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response, status: err.response }
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

// Delete product by id
export const deleteProduct = id => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`/api/products/${id}`);

      dispatch({ type: DELETE_PRODUCT });

      dispatch(setAlert('Product Removed', 'success'));
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  }
};
