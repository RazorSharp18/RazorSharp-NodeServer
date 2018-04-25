'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  // get Routes for Restaurants
  app.route('/restaurants').get(_restaurantController.list_all_restaurants).post(_restaurantController.save_restaurant);

  app.route('/restaurant/:name').get(_restaurantController.get_restaurant_by_name);
  app.route('/restaurants/names').get(_restaurantController.list_all_restaurant_names);
  app.route('/restaurants/:restaurant_id').delete(_restaurantController.remove_restaurant);
};

var _restaurantController = require('../controllers/restaurantController');