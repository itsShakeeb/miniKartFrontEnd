// import { applyMiddleware, compose, createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import thunk from "redux-thunk";
// import ReduxLogger from "redux-logger";

// import { loadState, saveState } from "../reusable/loadStateSession";

// import rootReducer from "./reducers";
// const composeEnhancers =
//   process.env.NODE_ENV !== "production" &&
//   typeof window === "object" &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const enhancer = composeEnhancers(applyMiddleware(thunk, ReduxLogger));

// const store = createStore(rootReducer, enhancer);
// const persistor = persistStore(store);

// export { store, persistor };
