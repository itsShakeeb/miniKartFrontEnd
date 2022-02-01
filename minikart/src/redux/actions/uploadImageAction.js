import * as ActionTypes from "../actionTypes";
import * as API from "../../utils/apiService";

export const uploadImageAction = (formData, callback) => {
  return async (dispatch) => {
    try {
      const response = await API.POST("upload-images", formData);
      dispatch({
        type: ActionTypes.IMAGE_UPLOADED_SUCCESSFULLY,
        payload: response.data.results.data,
      });
      callback(true, response.data.results.data);
    } catch (error) {
      callback(false, error.response.data);
    }
  };
};
