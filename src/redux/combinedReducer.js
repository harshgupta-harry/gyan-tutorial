import { combineReducers } from "redux";
import authReducer from "./auth";

const appReducer = combineReducers({
  authReducer: authReducer,
});

const combinedReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default combinedReducer;