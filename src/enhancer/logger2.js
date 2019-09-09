export default function logger2(createStore) {
  return function nextCreateStore(...args) {
    const store = createStore(...args);
    const { getState, dispatch } = store;
    const nextDispatch = (action) => {
      console.log("$$$ enhancer2 start");
      console.log("prev state2: ", getState());
      console.log("action2: ", action);
      const res = dispatch(action);
      console.log("next state2: ", getState());
      console.log("$$$  enhancer2 end");
      return res;
    };
    return {
      ...store,
      dispatch: nextDispatch
    };
  };
}
