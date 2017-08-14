'use strict';

function ReactWebComponentPlugin() {}

ReactWebComponentPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    const cssFiles = Object.keys(compilation.assets).filter(fileName =>
      /\.css$/.test(fileName)
    );

    const jsFiles = Object.keys(compilation.assets).filter(fileName =>
      /\.js$/.test(fileName)
    );

    const cssLinkTagsAsString = cssFiles
      .map(fileName => `<link href="${fileName}" rel="stylesheet">`)
      .join('');

    jsFiles.forEach(fileName => {
      compilation.assets[fileName].children.forEach(child => {
        if (child._value) {
          child._value = child._value.replace(
            /injectReactWebComponent\s*:\s*(true|!0)/g,
            `injectReactWebComponent: \'${cssLinkTagsAsString}\'`
          );
        }
      });
    });

    callback();
  });
};

module.exports = ReactWebComponentPlugin;
