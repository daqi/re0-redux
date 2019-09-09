export default function logger(createStore) {
  return function nextCreateStore(...args) {
    const store = createStore(...args);
    const { getState, dispatch } = store;
    const nextDispatch = (action) => {
      console.log("$$$ enhancer1 start");
      console.log("prev state1: ", getState());
      console.log("action1: ", action);
      const res = dispatch(action);
      console.log("next state1: ", getState());
      console.log("$$$  enhancer1 end");
      return res;
    };
    return {
      ...store,
      dispatch: nextDispatch
    };
  };
}
