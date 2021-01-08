import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../reducers";

const Store = configureStore({
  reducer: {
    score: boardReducer,
  },
});

export default Store;
