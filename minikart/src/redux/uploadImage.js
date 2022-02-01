// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { POST } from "../utils/apiService/index";

// const initialState = {
//   loading: "idle",
//   images: [],
//   currentRequestId: undefined,
//   error: null,
// };

// const uploadImagesAction = createAsyncThunk(
//   "uploadImage",
//   async ({ formData }, { rejectWithValue }) => {
//     try {
//       const response = await POST(`upload-images`, formData);
//       return response.data.results;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// const uploadImages = createSlice({
//   name: "uploadImage",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(uploadImagesAction.pending, (state, action) => {
//         if (state.loading === "idle") {
//           state.loading = "pending";
//           state.currentRequestId = action.meta.requestId;
//         }
//       })
//       .addCase(uploadImagesAction.fulfilled, (state, action) => {
//         const { requestId } = action.meta;
//         if (
//           state.loading === "pending" &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = "idle";
//           state.images = action.payload;
//           state.currentRequestId = undefined;
//         }
//       })
//       .addCase(uploadImagesAction.rejected, (state, action) => {
//         const { requestId } = action.meta;
//         if (
//           state.loading === "pending" &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = "idle";
//           state.error = action.error;
//           state.currentRequestId = undefined;
//         }
//       });
//   },
// });

// export { uploadImagesAction };
// export default uploadImages.reducer;
