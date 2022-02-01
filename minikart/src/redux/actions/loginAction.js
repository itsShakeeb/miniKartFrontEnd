import * as API from "../../utils/apiService";
import * as ActionTypes from "../actionTypes";

export const loginAction = (formData, callback) => {
  return function (dispatch) {
    // dispatch({
    //   type: ActionTypes.LOGIN_PENDING,
    //   payload: "pending",
    // });
    API.POST("login", formData)
      .then((response) => {
        const { token } = response.data;
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
        callback(true);
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: true,
        });
      })
      .catch((err) => {
        callback(err.response.data.errors);
        dispatch({
          type: ActionTypes.LOGIN_ERROR,
          payload: err.response.data.errors,
        });
      });
  };
};

export const logoutAction = () => {
  return function (dispatch) {
    dispatch({
      type: ActionTypes.LOGOUT,
    });
    sessionStorage.clear();
    window.location.href = "/admin/login";
  };
};
