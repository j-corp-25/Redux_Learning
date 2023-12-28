// we will use a cake example.

const redux = require("redux");

// we first create an action type

const CAKE_ORDERED = "CAKE_ORDERED";

// then we need to use an action, for this we use an action function. this is to show what ' action ' is being taken
// this is is called an action creator
// this is to show what happened in the application
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// then we need to initialyze the state, which will be our initial. how will our application state look from the beginning

const initialState = {
  numOfCakes: 10,
};

// reducer is needed  to update the application states through action
// takes in state then updates it after an action is fired by a dispatcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      // when a cake is ordred we copy the state with the spread operator and then reduce numOfCakes by one
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// we then create a 'store' which will hold the initial state as an object
