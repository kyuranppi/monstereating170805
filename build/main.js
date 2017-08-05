'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 라우팅

// HTTP Req Logger
//mongodb
var app = (0, _express2.default)(); // express app 인스턴스
// PARSE HTML BODY

//세션

var db = _mongoose2.default.connection; // database 연결 인스턴스
db.on('error', console.error);
db.once('open', function () {
    console.log('Connected to mongodb server');
});
_mongoose2.default.connect('mongodb://localhost/monster'); //monster 데이터베이스로 연결
var port = 8080;
var devPort = 8082;

// html logger and bodyparser use
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));

// api 주소로 라우팅
app.use('/api', _routes2.default);

// 세션사용
app.use((0, _expressSession2.default)({
    secret: 'monsterEating$1$016',
    resave: false,
    saveUninitialized: true
}));

// static file 위치 public 으로 고정
app.use(_express2.default.static('public'));

// 기본 라우팅 위치 public/index.html
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

app.listen(port, function () {
    console.log('Express is listening on port', port);
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!' + err);
});

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}