import { combineReducers, createStore } from "redux";
import { sampleReducer } from "./sample";

export const rootReducer = combineReducers({
  sample: sampleReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
