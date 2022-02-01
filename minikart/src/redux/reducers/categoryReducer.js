import * as ActionTypes from "../actionTypes";

const initialState = {
  categories: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case ActionTypes.ALL_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
