import { combineReducers, createStore } from "redux";
import { searchFormReducer } from "./searchForm";

export const rootReducer = combineReducers({
  searchForm: searchFormReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
