const produce = require("immer").produce;
const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;
const axios = require("axios");

// middlewares we are going to use
const reduxLogger = require("redux-logger");
const { thunk } = require("redux-thunk");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

// set the initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// declare our const for our action types

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// use action creators

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// define our reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  // below is the action creator
  // it can also accept dispatch as an argument
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.slice(0, 5).map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            number: user.phone,
            location: user.address.city,
            zip: user.address.zipcode,
            website: user.website,
            company: user.company.name
        }));
        dispatch(fetchUsersSucceeded(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};
// set up the store
const store = createStore(reducer, applyMiddleware(thunk, logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
