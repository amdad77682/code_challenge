import { combineReducers } from "redux";
const appReducers = combineReducers({
  auth: authenticateReducer
});

const reducers = (state, action) => {
  if (action.type === "FLAG") {
    state.flag = action.payload;
  }
  return appReducers(state, action);
};

export default reducers;
