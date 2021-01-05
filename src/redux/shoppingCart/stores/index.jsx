import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

const Store = configureStore({
  reducer: {
    rootReducer,
  },
});
export default Store;
