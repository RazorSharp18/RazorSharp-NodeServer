'use strict';

import mongodb from 'mongodb';
// import mongoose from 'mongoose';
import restaurantModel from '../models/restaurantModel';

var Restaurants = restaurantModel.Restaurants; //This is used to make CRUD calls to the db

let ObjectID = mongodb.ObjectID;
export function list_all_restaurant_names(req, res) {
  Restaurants.find({}, { _id: 0, name: 1 }, function (err, restaurant) {
      if (err)
        res.send(err);
      res.json(restaurant);
    });
}

export function list_all_restaurants(req, res) {
  Restaurants.find({}, function (err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
}

export function get_restaurant_by_name(req, res) {
  Restaurants.findOne({ name: req.params.name }, function (err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
}

export function save_restaurant(req, res) {
  var new_restaurant = new Restaurants(req.body);
  new_restaurant.save(function (err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
}

export function remove_restaurant(req, res) {
  Restaurants.remove({
    _id: new ObjectID(req.params.restaurant_id)
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ message: 'Restaurant successfully deleted' });
  });
}
