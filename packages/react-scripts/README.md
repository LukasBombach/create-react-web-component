<p align="center">
  <img alt="create-react-web-component Logo" src="https://github.com/WeltN24/create-react-web-component/raw/master/packages/react-scripts/docs/images/logo.png">
</p>

# react-web-component-react-scripts

This package includes scripts and configuration you can use with [Create React App](https://github.com/facebookincubator/create-react-app) to create a web component with React.

It is a fork of the orignal [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts) with a modified template and dependencies.

* [Installation / Setup](#installation-setup)
* [Differences to the original create-react-app react-scripts](#differences-to-the-original-create-react-app-react-scripts)
* [Maintainers](#maintainers)

## Installation / Setup

To use `react-web-component-react-scripts` install `create-react-app` globally:

```
npm install -g create-react-app
```

Then create a new project with the `create-react-app` CLI pointing to `react-web-component-react-scripts`:

```
create-react-app my-app --scripts-version react-scripts-web-component
cd my-app/
yarn start
```

## Differences to the original create-react-app react-scripts

This project utilizes [react-web-component](https://github.com/WeltN24/react-web-component) and [react-web-component-style-loader](https://github.com/WeltN24/react-web-component-style-loader). Webpack is already configured to use `react-web-component-style-loader` and your `index.js` template will look like this:

```js
import React from 'react';
import ReactWebComponent from 'react-web-component';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactWebComponent.create(<App />, 'react-web-component');
registerServiceWorker();
```

Instead of rendering your app into an element, a web component (here named `react-web-component`) will be created. Because we use `react-web-component-style-loader` all CSS you import in your project will be injected into the web component. Please refer to the documentation on `react-web-component` and `react-web-component-style-loader` for their usage:

* [react-web-component](https://github.com/WeltN24/react-web-component)
* [react-web-component-style-loader](https://github.com/WeltN24/react-web-component-style-loader)

Another difference is that next to the `index.html` a file `htmlImport.html` will be generated. Use `index.html` for development to preview your web component. Use `htmlImport.html` after building to use a with [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports).

## Development

After having created your project and switched to your project folder run

```
yarn start
```

A development server should start and http://localhost:3000 should open displaying your web component. You can develop your React components without any restrictions in complexity and features. Bare in mind though that you should not modify the host pages URL, for instance through `react-router`. You can still use `react-router` with the `MemoryRouter` and have no negative side effects. 

Read more about this and other development strategies on [WeltN24/react-web-component](https://github.com/WeltN24/react-web-component).

## Building

When you want to create a production build of your web component run

```
yarn build
```

The build directory now holds 2 HTML files: `index.html` and `htmlImport.html`. `index.html` is the HTML file you saw when you were developing your component, a website containing your web component. `htmlImport.html` holds the web component without HTML around it. You can use it to load it via [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports).

## Ejecting

You can eject your project the same way you eject an app created with `create-react-app`.

```
yarn eject
```

## Further documentation

All other details on setting up and working with `react-web-component-react-scripts` work exactly the same as in the original `create-react-app`. Please refer to its documentation for further details:

* [Project Home](https://github.com/facebookincubator/create-react-app)
* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/LukasBombach">
          <img width="150" height="150" src="https://github.com/LukasBombach.png?v=3&s=150">
          </br>
          Lukas Bombach
        </a>
      </td>
    </tr>
  <tbody>
</table>
