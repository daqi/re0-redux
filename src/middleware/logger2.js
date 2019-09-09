export default function logger({ getState, dispatch }) {
    return function chainItem(next) {
      return function nextDispatch(action) {
        console.log("$$$ middleware2 start");
        console.log("prev state2: ", getState());
        console.log("action2: ", action);
        const res = next(action);
        console.log("next state2: ", getState());
        console.log("$$$ middleware2 end");
        return res;
      };
    };
  }
  