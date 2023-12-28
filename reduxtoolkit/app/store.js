// we need to import configure store from the toolkit
const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("./features/cake/cakeSlice");

// this function accepts an object as an argument
const store = configureStore({
  reducer: {
    cake: cakeReducer,
  }
});

module.exports = store;
