const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "module.json", to: "" },
      ],
    }),
  ],
  optimization: {
    minimize: false,
  }
};