// we will use a cake example.

const redux = require("redux");
const createStore = redux.createStore;

// we first create an action type

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

// then we need to use an action, for this we use an action function. this is to show what ' action ' is being taken
// this is is called an action creator
// this is to show what happened in the application
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: RESTOCK_CAKE,
    quantity: qty,
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
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

// we then create a 'store' which will hold the initial state as an object
// it accepts the reducers as parameter
// the reducer holds the initial state
const store = createStore(reducer);

//store has a method subscribe that executes every time the state changes
// we return the updated state after the dispatch using getState
// this 'listens' for changes
const unsub = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
console.log("Initial State", store.getState());

// console.log('After first cake order',store.getState())

// we dispatch the action that is going to change the state via the reducer
store.dispatch(orderCake());
store.dispatch(restockCake(2));
// console.log("Updated State", store.getState());
// store.dispatch(orderCake());
// console.log("Updated State", store.getState());
// store.dispatch(orderCake());
// console.log("Updated State", store.getState());
// store.dispatch(orderCake());

// unsub()

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
console.log("Updated State", store.getState());

unsub();
