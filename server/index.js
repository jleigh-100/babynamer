const cors = require('cors');
const loader = require('./config-loader')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser');
const path = require('path');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const server = express();

require('dotenv').config({ path: path.join(__dirname, '/secrets/.env') });
const config = loader();

server.use(cors());
server.use(webpackDevMiddleware(compiler, { writeToDisk: true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use(bodyParser.json());

server.set('views', path.join(__dirname, '../public/'));

server.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

server.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));