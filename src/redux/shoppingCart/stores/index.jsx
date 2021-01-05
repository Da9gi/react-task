import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

const Store = configureStore({
  reducer: {
    shoppingCart: rootReducer,
  },
});
export default Store;
