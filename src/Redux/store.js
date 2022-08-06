import { createStore } from "redux";
import combreducer from "./Reducers/combReducer";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combreducer, devtools);
export default store;
