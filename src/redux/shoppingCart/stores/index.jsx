// import {  } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "../sagas";
import shoppingCart from "../reducers/index";

// const Store = configureStore({
//   reducer: {
//     shoppingCart: rootReducer,
//   },
// });
// export default Store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const Store = createStore(
  shoppingCart,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(sagaWatcher);

export default Store;
