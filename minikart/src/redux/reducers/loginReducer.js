import * as ActionTypes from "../actionTypes";

const initialState = {
  // loginPending: "idle",
  isLoggedIn: false,
  error: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionTypes.LOGIN_PENDING:
    //   return {
    //     ...state,
    //     loginPending: action.payload,
    //   };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        // loginPending: "idle",
        isLoggedIn: action.payload,
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        // loginPending: "idle",
        isLoggedIn: false,
        error: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        // loginPending: "idle",
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
