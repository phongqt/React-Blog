import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//Development Mode
//Be sure to invoke Webpack as env NODE_ENV=production webpack -p when building your production assets.
const DEBUG = process.env.NODE_ENV !== 'production';

let config = {
  debug: DEBUG ? true : false,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  entry: [
    './src/index.jsx',
    './src/assets/js/jquery.js',
    './src/assets/js/bootstrap.js',
    './src/assets/js/clean-blog.js',
    './src/assets/css/bootstrap.css',
    './src/assets/css/clean-blog.css'
  ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new HtmlWebpackPlugin({
      template: path.resolve('./node-server/', 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file'
      }, {
        test: /\.css$/,
        include: path.join(__dirname, 'src/assets/css'),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      {
        test: /modernizr\.min\.js$/,
        loader: "imports?this=>window,html5=>window.html5!exports?window.Modernizr"
      }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.js'],
    alias: {
      'base': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'data': path.resolve(__dirname, './src/data/'),
      'assets': path.resolve(__dirname, './src/assets/'),
      'global_styles': path.resolve(__dirname, './src/assets/styles/'),
      'constants': path.resolve(__dirname, './src/constants'),
      'actions': path.resolve(__dirname, './src/actions'),
      'utils': path.resolve(__dirname, './src/utils'),
      'reducers': path.resolve(__dirname, './src/reducers')
    }
  }
};

export default config;
