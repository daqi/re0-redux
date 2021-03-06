import { createStore, compose, applyMiddleware } from "./re0-redux";
import loggerMiddleware from "./middleware/logger";
import loggerMiddleware2 from "./middleware/logger2";
import loggerEnhancer from "./enhancer/logger";
import loggerEnhancer2 from "./enhancer/logger2";

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

const finalEnhancer = compose(
  applyMiddleware(loggerMiddleware, loggerMiddleware2),
  loggerEnhancer,
  loggerEnhancer2
);

const store = createStore(reducer, 100, finalEnhancer);

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100
