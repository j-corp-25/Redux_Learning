const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./app/features/user/userSlice').fetchUsers
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(fetchUsers())
// // to dispatch cake actions, we need import them from cakeSlice.js
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(3));

// // test icecreams actions

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(5))


// unsubscribe();
