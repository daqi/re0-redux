import compose from "./compose";
export default function applyMiddleware(...middlewares) {
  return function enhancer(createStore) {
    return function nextCreateStore(...args) {
      const store = createStore(...args);
      const { getState, dispatch } = store;
      let nextDispatch = f => f;
      const middlewareAPI = {
        getState,
        dispatch: (...args) => nextDispatch(...args)
      };
      const chain = middlewares.map(middleware => middleware(middlewareAPI));
      nextDispatch = compose(...chain)(dispatch);
      return {
        ...store,
        dispatch: nextDispatch
      };
    };
  };
}
