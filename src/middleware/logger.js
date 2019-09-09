export default function logger({ getState, dispatch }) {
  return function chainItem(next) {
    return function nextDispatch(action) {
      console.log("$$$ middleware1 start");
      console.log("prev state1: ", getState());
      console.log("action1: ", action);
      const res = next(action);
      console.log("next state1: ", getState());
      console.log("$$$ middleware1 end");
      return res;
    };
  };
}
