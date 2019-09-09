# 从零开始实现 redux

## 第一步实现

- `createStore(reducer)`
- `store.dispatch(action)`
- `store.getState()`

```js
import { createStore } from "./re0-redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState()); // 0

store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // 1

store.dispatch({ type: "DECREMENT" });
console.log(store.getState()); // 0
```

## 第二步实现

- `createStore(reducer, preloadedState)`
- `store.subscribe(listener)`
- `store.replaceReducer(nextReducer)`

```js
import { createStore } from "./re0-redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function nextReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 100;
    case "DECREMENT":
      return state - 100;
    default:
      return state;
  }
}

const store = createStore(reducer, 100);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100

store.replaceReducer(nextReducer);
store.dispatch({ type: "INCREMENT" }); // 200
store.dispatch({ type: "DECREMENT" }); // 100
```

## 第三步实现

- `enhancer: logger`
- `compose`

```js
import { createStore, compose } from "./re0-redux";
import logger from "./enhancer/logger";
import logger2 from "./enhancer/logger2";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const createStoreWithEnhancer = compose(
  logger2,
  logger
)(createStore);

const store = createStoreWithEnhancer(reducer, 100);

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100
```

## 第四步实现

- `applyMiddleware`
- `middleware: logger`

```js
import { createStore, compose, applyMiddleware } from "./re0-redux";
import loggerMiddleware from "./middleware/logger";
import loggerMiddleware2 from "./middleware/logger2";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,
  loggerMiddleware2
)(createStore);

const store = createStoreWithMiddleware(reducer, 100);

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100
```

## 第五步实现

- `createStore(reducer, preloadedState, enhancer)`

```js
import { createStore, compose, applyMiddleware } from "./re0-redux";
import loggerEnhancer from "./enhancer/logger";
import loggerEnhancer2 from "./enhancer/logger2";
import loggerMiddleware from "./middleware/logger";
import loggerMiddleware2 from "./middleware/logger2";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const finalEnhancer = compose(
  applyMiddleware(loggerMiddleware, loggerMiddleware2),
  loggerEnhancer,
  loggerEnhancer2
);

const store = createStore(reducer, 100, finalEnhancer);

store.dispatch({ type: "INCREMENT" }); // 101
store.dispatch({ type: "DECREMENT" }); // 100
```

源码：https://github.com/daqi/re0-redux
