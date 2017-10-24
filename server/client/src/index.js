import  'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const Store= createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(

    <Provider store={Store}><App /></Provider>
    ,
    document.querySelector('#root'));