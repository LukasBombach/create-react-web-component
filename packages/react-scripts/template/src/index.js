import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// todo this sucks
import { tagName } from './webComponent.json';

// todo test is document === web component?
const shadowRoot = document.querySelector(tagName).shadowRoot;
const isMounted = shadowRoot.querySelector('#react-app') !== null;

if (!isMounted) {
  const mountPoint = document.createElement('span');
  // todo mountPoint.id = 'react-app';
  shadowRoot.appendChild(mountPoint);
  ReactDOM.render(<App />, mountPoint);
}
registerServiceWorker();
