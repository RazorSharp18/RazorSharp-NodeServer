'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list_all_restaurant_names = list_all_restaurant_names;
exports.list_all_restaurants = list_all_restaurants;
exports.get_restaurant_by_name = get_restaurant_by_name;
exports.save_restaurant = save_restaurant;
exports.remove_restaurant = remove_restaurant;

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _restaurantModel = require('../models/restaurantModel');

var _restaurantModel2 = _interopRequireDefault(_restaurantModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Restaurants = _restaurantModel2.default.Restaurants; //This is used to make CRUD calls to the db

// import mongoose from 'mongoose';
let ObjectID = _mongodb2.default.ObjectID;
function list_all_restaurant_names(req, res) {
  Restaurants.find({}, { _id: 0, name: 1 }, function (err, restaurant) {
    if (err) res.send(err);
    res.json(restaurant);
  });
}

function list_all_restaurants(req, res) {
  Restaurants.find({}, function (err, restaurant) {
    if (err) res.send(err);
    res.json(restaurant);
  });
}

function get_restaurant_by_name(req, res) {
  Restaurants.findOne({ name: req.params.name }, function (err, restaurant) {
    if (err) res.send(err);
    res.json(restaurant);
  });
}

function save_restaurant(req, res) {
  var new_restaurant = new Restaurants(req.body);
  new_restaurant.save(function (err, restaurant) {
    if (err) res.send(err);
    res.json(restaurant);
  });
}

function remove_restaurant(req, res) {
  Restaurants.remove({
    _id: new ObjectID(req.params.restaurant_id)
  }, function (err) {
    if (err) res.send(err);
    res.json({ message: 'Restaurant successfully deleted' });
  });
}