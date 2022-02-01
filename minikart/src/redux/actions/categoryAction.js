import * as ActionTypes from "../actionTypes";
import * as API from "../../utils/apiService/index";

export const fetchCategoryAction = () => {
  return async (dispatch) => {
    try {
      const response = await API.GET("get-category");
      dispatch({
        type: ActionTypes.ALL_CATEGORY,
        payload: response.data.results.data,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: ActionTypes.ALL_CATEGORY_ERROR,
        payload: error.response.data,
      });
    }
  };
};
