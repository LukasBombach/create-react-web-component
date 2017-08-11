import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

export default {
  /**
   * todo fix jsdoc type of app
   * @param {*} app
   * @param {string} tagName
   * @param {Object} [options]
   */
  create: function(app, tagName, options) {
    const proto = Object.create(HTMLElement.prototype, {
      attachedCallback: {
        value: function() {
          const mountPoint = document.createElement('div');
          const cssHack = document.createElement('div');
          const shadowRoot = this.createShadowRoot();
          const css =
            options && typeof options.injectReactWebComponent === 'string'
              ? options.injectReactWebComponent
              : '';
          shadowRoot.appendChild(mountPoint);
          shadowRoot.appendChild(cssHack);
          cssHack.insertAdjacentHTML('beforeend', css);
          ReactDOM.render(app, mountPoint);
          retargetEvents(shadowRoot);
        },
      },
    });
    document.registerElement(tagName, { prototype: proto });
  },
};
