import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";
import imageUploadReducer from "./uploadImageReducer";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
  loginReducer,
  productReducer,
  imageUploadReducer,
  categoryReducer,
});

export default rootReducer;
