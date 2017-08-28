import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchSingleCheckin, fetchAllCheckins, createCheckin, updateCheckin, deleteCheckin } from './util/checkin_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchSingleCheckin = fetchSingleCheckin;
  window.fetchAllCheckins = fetchAllCheckins;
  window.createCheckin = createCheckin;
  window.updateCheckin = updateCheckin;
  window.deleteCheckin = deleteCheckin;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
