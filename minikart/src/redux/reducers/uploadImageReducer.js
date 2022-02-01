import * as ActionTypes from "../actionTypes";

const initialState = {
  uploading: "idle",
  uploadedImage: [],
  error: null,
};

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PENDING:
      return {
        ...state,
        uploading: "pending",
      };
    case ActionTypes.IMAGE_UPLOADED_SUCCESSFULLY:
      return {
        ...state,
        uploading: "idle",
        uploadedImage: action.payload,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        uploading: "idle",
        error: action.payload,
      };

    default:
      return state;
  }
};
export default imageUploadReducer;
