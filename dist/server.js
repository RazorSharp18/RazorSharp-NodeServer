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

var _restaurantRoutes = require('./routes/restaurantRoutes');

var _restaurantRoutes2 = _interopRequireDefault(_restaurantRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const port = process.env.PORT || 3001;
// var Restaurant = require('./api/models/restaurantModel');

// mongoose instance connection url connection
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/RazorLive');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// import Restaurant from './models/restaurantModel'; //created model loading here

//importing route
(0, _restaurantRoutes2.default)(app); //register the route
// import routes2 from './routes/userRoutes';
// routes2(app);


app.listen(port);

exports.default = app;


console.log('todo list RESTful API server started on: ' + port);