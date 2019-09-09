export default function createStore(reducer, preloadedState, enhancer) {
  let currentState = preloadedState;
  let currentReducer = reducer;
  let currentListeners = [];

  if (enhancer) {
    enhancer(createStore)(reducer, preloadedState);
  }

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach(listener => listener());
    return action;
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer;
    dispatch({ type: "replace" });
  }

  function subscribe(listener) {
    currentListeners.push(listener);
  }

  dispatch({ type: "init" });

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer
  };
}
