import { createStore, compose, applyMiddleware } from "./re0-redux";
import loggerMiddleware from "./middleware/logger";
import loggerMiddleware2 from "./middleware/logger2";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,
  loggerMiddleware2
)(createStore);

const store = createStoreWithMiddleware(reducer, 100);

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100