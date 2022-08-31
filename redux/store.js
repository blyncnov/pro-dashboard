import { createStore } from "redux";
import rootReducer from "./reducers/rootReducers";

const store = createStore(
  rootReducer,
  {}
  //   typeof window !== "undefined"
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //         window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : null
);

export default store;
