'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('../api/config/db');

var _db2 = _interopRequireDefault(_db);

var _middlewares = require('./config/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _restaurantRoutes = require('./routes/restaurantRoutes');

var _restaurantRoutes2 = _interopRequireDefault(_restaurantRoutes);

var _userRoutes = require('./routes/userRoutes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const port = process.env.PORT || 3001;
// var Restaurant = require('./api/models/restaurantModel');

// mongoose instance connection url connection
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/RazorLive');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

//figure out a way to initialize all the routes easily.
//importing route
(0, _restaurantRoutes2.default)(app); //register the restaurant routes

(0, _userRoutes2.default)(app);

/**
* Database
*/
(0, _db2.default)();
/**
* Middlewares
*/
(0, _middlewares2.default)(app);

app.listen(port);

exports.default = app;


console.log('todo list RESTful API server started on: ' + port);