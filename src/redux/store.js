import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import combinedReducer from "./combinedReducer";

const middlewares = [thunk];
middlewares.push(logger);

export const store = createStore(
    combinedReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);
