import React from 'react';
import ReactDOM from 'react-dom';
import {createStore ,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import App from './App';
import './index.css';

import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from './Reducer/reducer';
import { Provider } from 'react-redux';
const initValue={
  userInfo:{},
  login:false,
  loginError:null,
  userRegister:{},
  registerError:null,
  createBlog:{},
  allBlogs:[],
  userBlogs:[]
}

const store = createStore(reducer,initValue,composeWithDevTools( applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

