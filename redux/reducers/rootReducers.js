import { combineReducers } from "redux";

import navigationReducer from "./navigationReducer";

export const rootReducer = combineReducers({
  navigationReducer: navigationReducer,
});

export default rootReducer;
