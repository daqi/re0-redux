export default function createStore(reducer) {
  let currentState;
  let currentReducer = reducer;

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    return action;
  }

  dispatch({ type: "init" });
  return {
    getState,
    dispatch
  };
}
