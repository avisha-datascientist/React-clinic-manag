
import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import  'materialize-css/dist/css/materialize.min.css';

import configureStore from './store/index';
import TempContainer from './components/TempContainer';
const Store = configureStore();
ReactDOM.render(
  <Provider store={Store}><TempContainer /></Provider>,
      document.querySelector('#root')
  );
