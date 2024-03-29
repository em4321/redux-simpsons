import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";

export const store = configureStore(
  {
    reducer: {
      character: characterReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
);
