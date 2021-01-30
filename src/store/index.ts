import { combineReducers, createStore } from "redux";
import { searchFormReducer } from "./searchForm";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  searchForm: searchFormReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());
export default store;
