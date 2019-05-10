import { combineReducers } from "redux";
import { albumReducer } from "../modules/albums/reducer";
const appReducers = combineReducers({
  albums: albumReducer
});

const reducers = (state, action) => {
  if (action.type === "FLAG") {
    state.flag = action.payload;
  }
  return appReducers(state, action);
};

export default reducers;
