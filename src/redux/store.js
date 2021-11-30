import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import logger from "redux-logger";

import settingsReducer from "./features/settings";

export const store = configureStore({
  reducer: {
    settings: settingsReducer
  },
  middleware: new MiddlewareArray().concat(logger)
});

export default store;
