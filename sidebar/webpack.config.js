const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // The entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for build
    filename: 'main.js', // The filename for the bundled output
    publicPath: '/', // Set this for routing if you are using react-router
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Handle JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel loader for JSX and ES6+ code
        },
      },
      {
        test: /\.css$/, // Handle CSS imports
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for HTML
      inject: true, // Automatically injects <script> for built JS
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'), // Where to serve from
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3002, // Port for local dev server
  },
};
