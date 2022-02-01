import * as ActionTypes from "../actionTypes";
import * as API from "../../utils/apiService";

export const fetchProduct = (perPage, page) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.PENDING,
    });
    try {
      const response = await API.GET(
        `all-product?per_page=${perPage}&page=${page}`
      );
      dispatch({
        type: ActionTypes.FETCHING_PRODUCT_SUCCESS,
        payload: response.data.results.data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getProductDetailById = (id, callback) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.PRODUCT_DETAIL_BY_ID,
      payload: id,
    });
    callback();
  };
};

export const updateProductDetail = (formData, id, callback) => {
  return async (dispatch) => {
    try {
      const response = await API.PUT(`update-product/${id}`, formData);
      dispatch({
        type: ActionTypes.PRODUCT_UPDATED_SUCCESSFULLY,
        payload: response.data.results.data,
      });
      callback(true);
    } catch (error) {
      callback(false, error.response.data);
    }
  };
};

export const addNewProductAction = (formData, callback) => {
  return async (dispatch) => {
    try {
      const response = await API.POST(`add-product`, formData);
      dispatch({
        type: ActionTypes.PRODUCT_ADDED_SUCCESSFULLY,
        payload: response.data.results.data,
      });
      callback(true);
    } catch (error) {
      callback(false, error.response.data);
    }
  };
};

export const deleteOneProductAction = (id, callback) => {
  return async (dispatch) => {
    try {
      const response = await API.DELETE(`delete-product/${id}`);
      dispatch({
        type: ActionTypes.PRODUCT_DELETED_SUCCESSFULLY,
        payload: response.data.results.data,
      });
      callback(true);
    } catch (error) {
      callback(false, error.response.data);
    }
  };
};
