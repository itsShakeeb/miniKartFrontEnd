// import {
//   createAsyncThunk,
//   createSlice,
//   createAction,
//   current,
// } from "@reduxjs/toolkit";
// import { GET, PUT } from "../utils/apiService/index";

// const initialState = {
//   loading: "idle",
//   items: [],
//   detail: [],
//   currentRequestId: undefined,
//   error: null,
// };

// const getProductAction = createAsyncThunk(
//   "product",
//   async ({ perPage, page }, { rejectWithValue }) => {
//     try {
//       const response = await GET(
//         `all-product?per_page=${perPage}&page=${page}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// const updateProductDetail = createAsyncThunk(
//   "update-product",
//   async ({ data, id }, { rejectWithValue }) => {
//     try {
//       const response = await PUT(`update-product/${id}`, data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// // const getProductByIdAction = createAction("getProductByIdAction");

// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     getProductByIdAction: (state, action) => {
//       if (state.items[0]) {
//         state.detail = state.items[0].filter(
//           (i) => i?._id === action.payload.id
//         );
//         action.payload.cb();
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProductAction.pending, (state, action) => {
//         if (state.loading === "idle") {
//           state.loading = "pending";
//           state.currentRequestId = action.meta.requestId;
//         }
//       })
//       .addCase(getProductAction.fulfilled, (state, action) => {
//         const { requestId } = action.meta;
//         if (
//           state.loading === "pending" &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = "idle";
//           state.items.push(action.payload.results[0].data);
//           state.currentRequestId = undefined;
//         }
//       })
//       .addCase(getProductAction.rejected, (state, action) => {
//         const { requestId } = action.meta;
//         if (
//           state.loading === "pending" &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = "idle";
//           state.error = action.error;
//           state.currentRequestId = undefined;
//         }
//       })
//       .addCase(updateProductDetail.pending, (state, action) => {
//         if (state.loading === "idle") {
//           state.loading = "pending";
//           state.currentRequestId = action.meta.requestId;
//         }
//       })
//       .addCase(updateProductDetail.fulfilled, (state, action) => {
//         const { requestId } = action.meta;
//         if (
//           state.loading === "pending" &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = "idle";
//           state.currentRequestId = undefined;
//         }
//       })
//       .addCase(updateProductDetail.rejected, (state, action) => {
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

// export { getProductAction, updateProductDetail };
// export const { getProductByIdAction } = productSlice.actions;
// export default productSlice.reducer;
