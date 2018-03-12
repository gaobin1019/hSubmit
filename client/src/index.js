import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {lists} from "./reducers/lists";
import $ from 'jquery';
import {sync} from "./script";

let store;

const render = () => {
  if (store) {
    sync(store.getState());
    console.log(store.getState());
  }
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

$.ajax({
  method:'GET',
  url: '/api/lists'
}).then(res => {
  console.log(res);
  if (res) {
    store = createStore(lists, res);
  } else {
    store = createStore(lists);
  }

  store.subscribe(render);
  render();
}, err => {
  console.error(err.message);
});

registerServiceWorker();