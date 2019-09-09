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

function nextReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 100;
    case "DECREMENT":
      return state - 100;
    default:
      return state;
  }
}

const store = createStore(reducer, 100);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100

store.replaceReducer(nextReducer);
store.dispatch({ type: "INCREMENT" }); // 200
store.dispatch({ type: "DECREMENT" }); // 100
