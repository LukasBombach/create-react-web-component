import React from 'react';
import ReactWebComponent from 'react-web-component';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactWebComponent.create(<App />, 'my-component');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
