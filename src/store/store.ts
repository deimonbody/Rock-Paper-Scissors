import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./saga";
import { userReducer } from "./user/reducer";

export const reducer = combineReducers({ userReducer });
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export type AppStore = typeof store;
