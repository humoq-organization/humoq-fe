const WorkboxPlugin = require('workbox-webpack-plugin');

  module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
      plugins: [
        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          exclude: [/swagger-ui/]
        })
      ],
    },
  };