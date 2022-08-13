const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    index: './src/index.js',
    delete_todo: './src/delete_todo.js',
    header: './src/header.js',
    sidebar: './src/sidebar.js',
    addEvent: './src/addEvent.js'
  },
  devtool:'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TODO-List',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
};

