import * as ActionTypes from "../actionTypes";

const initialState = {
  loading: "idle",
  allProduct: [],
  error: null,
  productDetail: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PENDING:
      return {
        ...state,
        loading: "pending",
      };
    case ActionTypes.FETCHING_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: "idle",
        allProduct: action.payload,
      };
    case ActionTypes.PRODUCT_DETAIL_BY_ID:
      const id = action.payload;
      return {
        ...state,
        loading: "idle",
        productDetail: state.allProduct.filter((item) => item._id === id)[0],
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        loading: "idle",
        allProduct: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
