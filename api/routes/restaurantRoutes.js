import { list_all_restaurants } from '../controllers/restaurantController';
// var express = require('express');
// var router = express.Router();

export default function (app) {
  // get Routes for Restaurants
  app.route('/restaurants')
    .get(list_all_restaurants)
    // .post(RestaurantController.save_restaurant);
// console.log(RestaurantController.list_all_restaurants);
  // router.get('restaurants', list_all_restaurants);
  // app.route('/restaurant/:name').get(RestaurantController.get_restaurant_by_name);
  // app.route('/restaurants/names').get(RestaurantController.list_all_restaurant_names);
  // app.route('/restaurants/:restaurant_id')
  //   .delete(RestaurantController.remove_restaurant);
}