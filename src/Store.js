import rootReducer from "./Reducers/CombineRed";

import { createStore } from "redux";

const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
