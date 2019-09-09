export default function logger(createStore) {
  return function nextCreateStore(...args) {
    const store = createStore(...args);
    const { getState, dispatch } = store;
    const nextDispatch = (action) => {
      console.log("prev state2: ", getState());
      console.log("action2: ", action);
      const res = dispatch(action);
      console.log("next state2: ", getState());
      return res;
    };
    return {
      ...store,
      dispatch: nextDispatch
    };
  };
}
