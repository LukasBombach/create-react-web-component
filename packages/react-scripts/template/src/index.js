import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import webComponentSettings from './webComponent.json';
import registerServiceWorker from './registerServiceWorker';

const webComponents = [
  ...document.querySelectorAll(webComponentSettings.tagName),
];

webComponents.forEach(function({ shadowRoot }) {
  const isMounted = shadowRoot.querySelector('#react-app') !== null;
  if (!isMounted) {
    const mountPoint = document.createElement('div');
    mountPoint.id = 'react-app';
    shadowRoot.appendChild(mountPoint);
    ReactDOM.render(<App />, mountPoint);
  }
});

registerServiceWorker();
