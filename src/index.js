import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import { artistReducer } from './reducers/artistReducer';


const store = createStore(artistReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const root = ReactDOM.createRoot(document.getElementById('root'));
  store.subscribe(()=>console.log(store));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
       <App /> 
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
