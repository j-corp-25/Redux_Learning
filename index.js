// we will use a cake example.

const redux = require("redux");
const createStore = redux.createStore;
// this is a helper function
const bindActionCreators = redux.bindActionCreators;

// we first create an action type

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const ORDERED_ICECREAM = "ORDERED_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

function orderIcecream(qty = 1) {
  return {
    type: ORDERED_ICECREAM,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty,
  };
}

// then we need to use an action, for this we use an action function. this is to show what ' action ' is being taken
// this is is called an action creator
// this is to show what happened in the application
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    // in redux, the convention is to use a property named payload for any additional information you want to send in the action
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
}
// then we need to initialyze the state, which will be our initial. how will our application state look from the beginning

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 10,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIcecreams: 10,
};

// reducer is needed  to update the application states through action
// takes in state then updates it after an action is fired by a dispatcher
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      // when a cake is ordred we copy the state with the spread operator and then reduce numOfCakes by one
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    // case ORDERED_ICECREAM:
    //   // when a cake is ordred we copy the state with the spread operator and then reduce numOfCakes by one
    //   return {
    //     ...state,
    //     numOfIcecreams: state.numOfIcecreams - action.payload,
    //   };
    // case RESTOCK_ICECREAM:
    //   return {
    //     ...state,
    //     numOfIcecreams: state.numOfIcecreams + action.payload,
    //   };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    // case CAKE_ORDERED:
    //   // when a cake is ordred we copy the state with the spread operator and then reduce numOfCakes by one
    //   return {
    //     ...state,
    //     numOfCakes: state.numOfCakes - action.payload,
    //   };
    // case RESTOCK_CAKE:
    //   return {
    //     ...state,
    //     numOfCakes: state.numOfCakes + action.payload,
    //   };
    case ORDERED_ICECREAM:
      // when a cake is ordred we copy the state with the spread operator and then reduce numOfCakes by one
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

// we then create a 'store' which will hold the initial state as an object
// it accepts the reducers as parameter
// the reducer holds the initial state

//! createStore only accepts once reducer so we need to use a combine reducer to use both recuders we just used
const store = createStore(redux.combineReducers({
    iceCreamReducer,
    cakeReducer
}));

//store has a method subscribe that executes every time the state changes
// we return the updated state after the dispatch using getState
// this 'listens' for changes
console.log("Initial State", store.getState());

const unsub = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

// console.log('After first cake order',store.getState())

// // we dispatch the action that is going to change the state via the reducer
// store.dispatch(orderCake());
// store.dispatch(restockCake(2));
// // console.log("Updated State", store.getState());
// // store.dispatch(orderCake());
// // console.log("Updated State", store.getState());
// // store.dispatch(orderCake());
// // console.log("Updated State", store.getState());
// // store.dispatch(orderCake());

// // unsub()

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// this is a helper function that helps invoke action creator functions
//  this avoids doing //! store.dispatch(orderCake())
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream(2);
actions.orderIcecream(2);
actions.orderIcecream(2);
actions.restockIcecream(4);

unsub();
// console.log("Updated State", store.getState());

// unsub();
