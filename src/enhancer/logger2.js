export default function logger(createStore) {
  return function nextCreateStore(...args) {
    const store = createStore(...args);
    const { getState, dispatch } = store;
    const nextDispatch = (action) => {
      const logArr = [];
      logArr.push("prev state: ", getState(), "\n");
      logArr.push("action: ", action, "\n");
      const res = dispatch(action);
      logArr.push("next state: ", getState(), "\n");
      console.log("enhancer logger2", "\n", ...logArr);
      return res;
    };
    return {
      ...store,
      dispatch: nextDispatch
    };
  };
}
