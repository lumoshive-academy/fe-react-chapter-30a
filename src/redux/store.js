import { createStore, applyMiddleware } from "redux";
import counterReducer from "./counterReducer";

// Custom Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Middleware:", action.type);
  return next(action);
};

// Membuat store Redux dengan middleware
const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));

export default store;
