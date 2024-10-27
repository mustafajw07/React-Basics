import { legacy_createStore as createStore } from "redux";
import { searchInputReducer } from "./reducers/SearchReducer";

const store = createStore(searchInputReducer);

export default store;