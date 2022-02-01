// import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import { POST } from "../utils/apiService/index";

// const initialState = {
//   is_logged_in: false,
//   loading: "idle",
//   currentRequestId: undefined,
//   error: {},
// };

// const loginAction = createAsyncThunk(
//   "login",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await POST("login", formData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// const logoutAction = createAction("logoutAction");
// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAction.pending, (state, action) => {
//         if (state.loading === "idle") {
//           state.loading = "pending";
//           state.currentRequestId = action.meta.requestId;
//         }
//       })
//       .addCase(loginAction.fulfilled, (state, action) => {
//         const { requestId } = action.meta;
//         if (
//           state.loading === "pending" &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = "idle";
//           state.is_logged_in = true;
//           sessionStorage.setItem("token", JSON.stringify(action.payload.token));
//           sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
//           state.currentRequestId = undefined;
//         }
//       })
//       .addCase(loginAction.rejected, (state, action) => {
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
//       .addCase(logoutAction, (state) => {
//         state.is_logged_in = false;
//         sessionStorage.setItem("token", JSON.stringify(null));
//         sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
//       });
//   },
// });

// export { loginAction, logoutAction };

// export default loginSlice.reducer;
