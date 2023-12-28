const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// to dispatch cake actions, we need import them from cakeSlice.js
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStocked(3));

unsubscribe();
