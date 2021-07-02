// based in this tutorial:
//https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd
//Simple Redux Counter Example
// Theodore Anderson


import React, { Component } from 'react';
import './App.css';
import {bindActionCreators, createStore} from 'redux';

function rootReducer( state= [], action) {
  switch(action.type) {
    case 'ADD-ONE':
      return state.concat('added one')
    case 'SUBTRACT-ONE':
      return state.concat('subtracted one')
    default:
      return state
  }
}

let store = createStore(rootReducer);

const storeS = store.subscribe(()=> {
  console.log("Store:",store.getState())
});



const increment = () => {
  console.log('in store increment method');
  store.dispatch({type: 'ADD-ONE', data: 'added one'});

}


const decrement = () => {
  console.log('in store decrement method');
  store.dispatch({type: 'SUBTRACT-ONE', data: 'subtracted one'});

}


function App() {


  return (
    <div className="App">


      <h1>Simple Redux Counter</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default App;


