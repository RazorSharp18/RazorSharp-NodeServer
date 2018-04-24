'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Schema from 'mongoose.Schema';


var RestaurantSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the restaurant'
  },
  restaurant_type: {
    type: [{
      type: String,
      enum: ['Italian', 'Greek', 'Mediterranean', 'Indian']
    }]
  },
  waiting_time: {
    type: Number,
    default: 1
  },
  Last_Rated: {
    type: Date,
    default: Date.now
  }
});

//Exporting the model with mongoose schema. So that this can be used in controllers to fetch from the db.
var Restaurants = _mongoose2.default.model('Restaurants', RestaurantSchema);

module.exports = {
  Restaurants: Restaurants
};