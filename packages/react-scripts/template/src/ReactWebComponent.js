import ReactDOM from 'react-dom';
import retargetEvents from './retargetEvents';
import createStyleTag from './createStyleTag';

export default {
  /**
   * todo fix jsdoc type of app and options
   * @param {*} app
   * @param {string} tagName
   * @param {Object} [options]
   */
  create: function(app, tagName, options) {
    const proto = Object.create(HTMLElement.prototype, {
      attachedCallback: {
        value: function() {
          const shadowRoot = this.createShadowRoot();
          const mountPoint = document.createElement('div');
          const uuid = REACT_WEB_COMPONENT_UUID; // eslint-disable-line no-undef
          [
            ...document.head.querySelectorAll(
              `script[type="text/x-react-web-component-css"][data-webpack-uuid="${uuid}"]`
            ),
          ]
            .map(node => createStyleTag(node.innerHTML))
            .forEach(element => shadowRoot.appendChild(element));
          shadowRoot.appendChild(mountPoint);
          ReactDOM.render(app, mountPoint);
          retargetEvents(shadowRoot);
        },
      },
    });
    document.registerElement(tagName, { prototype: proto });
  },
};
