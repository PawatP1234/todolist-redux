import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  salary: 15000,
  todolist:[],
  index: 0,
}

const userState = {
  name: 'Male',
  age: 20
}

const userReducer = (state=userState,action) => {
  switch (action.type) {
    case 'setName':
      state = {
        ...state,
        name : action.payload,
      }
    break;
    case 'setAge':
      state = {
        ...state,
        age : action.payload,
      }
    break;
    default:
  }
  return state;
}

const todoList = (state=initialState,action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        todolist: [...state.todolist,action.payload],
        index: state.index += 1,
      }
    break;
    case 'UPDATE':
      let temp = [];
      {state.todolist.map(function(msg,index){
        if(index === action.temp){
          temp.push(action.payload);
        } else {
          temp.push(msg);
        }
        console.log('Temp : ',temp);
      });}
      state = {
        todolist: temp,
      }
    break;
    default:
  }
  return state;
}

const myLogger=(store)=>(next)=>(action)=>{
  console.log('Log Action : ',action);
  next(action);
}
const store = createStore(combineReducers({todo: todoList,user: userReducer}),{},applyMiddleware(myLogger));

store.subscribe(()=>{
  console.log('Update Store : ',store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);