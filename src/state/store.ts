import { drawCardReducer } from "./reducers/drawCard.reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  drawCard: drawCardReducer,
});
export type State = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunk));
