// import {configureStore  } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "../sagas";
import shoppingCart from "../reducers/index";

// const Store = configureStore({
//   reducer: {
//     shoppingCart: rootReducer,
//   },
// });
// export default Store;
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(shoppingCart, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaWatcher);

export default Store;
