import React from 'react';
import ReactWebComponent from 'react-web-component';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactWebComponent.create(<App />, 'my-component');
registerServiceWorker();
