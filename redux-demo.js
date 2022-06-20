//importing redux
const redux = require('redux');

//reducer
  //i: takes old state && actions as argument
  //o: spits out the new state object (snapshot) to store
  //pure function without side effects

 //give inital value of state here
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type ==== 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }

  return state;
};

//central data store
//store is aware of reducer in charge of updating its state
const store = redux.createStore(counterReducer);

//subscription to the store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}
//subscribe to the store, runs whenever the data in the store changes
store.subscribe(counterSubscriber);

//action
    //dispatch
store.dispatch({type: 'INCREMENT' });
store.dispatch({type: 'DECREMENT' });
//components