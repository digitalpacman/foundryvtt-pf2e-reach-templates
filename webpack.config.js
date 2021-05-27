const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/module.json', to: '' }
      ]
    })
  ]
};