export default function createStore(reducer, preloadedState) {
  let currentState = preloadedState;
  let currentReducer = reducer;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach(listener => listener());
    return action;
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer
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
