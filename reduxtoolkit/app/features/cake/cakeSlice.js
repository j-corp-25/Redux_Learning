// we first import the slice function from redux toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};
// we need to invoke the function
// this accepts an object as an argument
// we specify three properties
const cakeSlice = createSlice({
  //1. specify a name for this slice
  name: "cake",
  //2. next specify the initial state for this individual slice
  // we specify it using a key and value
  //   initialState: initialState
  // if key and value are the same we can use ES6 shorthand to just put initial state
  initialState,
  //   3. next we specify the reducer function
  //add a key reducer
  reducers: {
    // here we specify the individual state transitions
    // here we have a key that is going to receive state and actions as arguments
    ordered: (state, action) => {
      // with redux toolkit we can directly mutate the state
      // redux toolkit under the hood takes care of producing a state
      state.numOfCakes--;
    },
    reStocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
//we export the reducer here and actions
//this slice effectively takes care of
// 1. Action constants,
// 2. Action object,
//  3.Action creator,
// 4.Switch statements
// 5. handling immutable updates in the reducer
// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;

module.exports = {
  cakeActions: cakeSlice.actions,
  cakeReducer: cakeSlice.reducer,
};
