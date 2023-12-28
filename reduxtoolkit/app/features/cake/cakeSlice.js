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
    
  }
});
