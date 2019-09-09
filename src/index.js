import { createStore, compose } from "./re0-redux";
import logger from "./enhancer/logger";
import logger2 from "./enhancer/logger2";

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

const createStoreWithEnhancer = compose(
  logger2,
  logger
)(createStore);

const store = createStoreWithEnhancer(reducer, 100);

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100