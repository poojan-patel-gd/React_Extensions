import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';


chrome.storage.local.get('state', (obj) => {
  const { state } = obj;

  const initialState = JSON.parse(state || '{}');
  chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
    var tablink = tab[0].url;
    console.log({tablink})
    // chrome.storage.local.set({ url: tablink });

    initialState.urls = {
      url: tablink
    };

    console.log(initialState);
    const createStore = require('../../app/store/configureStore');

    ReactDOM.render(
        <Root store={createStore(initialState)} />,
        document.querySelector('#root')
    );
  })

});
