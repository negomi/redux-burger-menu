module.exports = {
  entry: "docs/index.js",
  output: {
    path: __dirname,
    filename: "docs/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  }
};
