import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/index";

const Store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
export default Store;
