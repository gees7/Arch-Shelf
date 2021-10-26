const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

/* Without CSS Modules, with PostCSS */
// module.exports = withLess();

/* With CSS Modules */
// module.exports = withLess({ cssModules: true })

/* With additional configuration on top of CSS Modules */

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(
      __dirname,
      './assets/css/theme/antd/antd-custom-variables.less',
    ),
    'utf8',
  ),
);

module.exports = withImages(
  withCSS(
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style.*?/;
          const origExternals = [...config.externals];
          // eslint-disable-next-line no-param-reassign
          config.externals = [
            // eslint-disable-next-line consistent-return
            (context, request, callback) => {
              if (request.match(antStyles)) return callback();
              if (typeof origExternals[0] === 'function') {
                origExternals[0](context, request, callback);
              } else {
                callback();
              }
            },
            ...(typeof origExternals[0] === 'function' ? [] : origExternals),
          ];

          config.module.rules.unshift({
            test: antStyles,
            use: 'null-loader',
          });
        }
        return config;
      },
      env: {
        SERVER: process.env.SERVER,
      },
    }),
  ),
);
