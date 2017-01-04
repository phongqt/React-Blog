import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';


let app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '../src'));
app.use(webpackMiddleware(compiler, {
  hot: true,
  stats: {
    colors: true
  },
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  noInfo: false
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
