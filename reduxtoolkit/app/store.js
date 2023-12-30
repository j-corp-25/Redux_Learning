// we need to import configure store from the toolkit
const { configureStore } = require("@reduxjs/toolkit");
const { cakeReducer } = require("./features/cake/cakeSlice");
const { icecreamReducer } = require("./features/icecream/icecreamSlice")
const logger = require("redux-logger").createLogger();
const userReducer = require('../app/features/user/userSlice')

// we dont need to use combine reducers since its already there
// this function accepts an object as an argument
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
