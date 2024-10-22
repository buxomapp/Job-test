import axios from 'axios';
import {
  FETCH_LISTS,
  ADD_LIST,
  ADD_PRODUCT,
  TOGGLE_PURCHASED,
} from '../actionTypes';

const apiUrl = 'http://localhost:8000/api'; // Your Laravel API URL

export const fetchLists = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/shopping-lists`);
    dispatch({ type: FETCH_LISTS, payload: response.data });
  };
};

export const addList = (name) => {
  return async (dispatch) => {
    const response = await axios.post(`${apiUrl}/shopping-lists`, { name });
    dispatch({ type: ADD_LIST, payload: response.data });
  };
};

export const addProduct = (listId, product) => {
  return async (dispatch) => {
    const response = await axios.post(`${apiUrl}/shopping-lists/${listId}/products`, product);
    dispatch({ type: ADD_PRODUCT, payload: { listId, product: response.data } });
  };
};

export const togglePurchased = (productId, isPurchased) => {
  return async (dispatch) => {
    const response = await axios.patch(`${apiUrl}/products/${productId}`, { is_purchased: isPurchased });
    dispatch({ type: TOGGLE_PURCHASED, payload: response.data });
  };
};
