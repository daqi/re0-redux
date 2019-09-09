export default function logger(createStore) {
  return function nextCreateStore(...args) {
    const store = createStore(...args);
    const { getState, dispatch } = store;
    const nextDispatch = (action) => {
      console.log("prev state: ", getState());
      console.log("action: ", action);
      const res = dispatch(action);
      console.log("next state: ", getState());
      return res;
    };
    return {
      ...store,
      dispatch: nextDispatch
    };
  };
}
