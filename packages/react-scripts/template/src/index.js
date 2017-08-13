import React from 'react';
import ReactWebComponent from './ReactWebComponent';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactWebComponent.create(<App />, 'react-web-component');

registerServiceWorker();
