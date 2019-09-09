import { createStore } from "./re0-redux";

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

const store = createStore(reducer);

console.log(store.getState()); // 0

store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // 1

store.dispatch({ type: "DECREMENT" });
console.log(store.getState()); // 0
