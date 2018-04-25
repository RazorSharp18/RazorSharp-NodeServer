import { list_all_restaurants, 
  save_restaurant, 
  get_restaurant_by_name, 
  list_all_restaurant_names, 
  remove_restaurant } from '../controllers/restaurantController';
//Find the right way to import the whole package and reuse it to call all the methods.
// import RestaurantController from '../controllers/restaurantController';

export default function (app) {
  // get Routes for Restaurants
  app.route('/restaurants')
    .get(list_all_restaurants)
    .post(save_restaurant);

  app.route('/restaurant/:name').get(get_restaurant_by_name);
  app.route('/restaurants/names').get(list_all_restaurant_names);
  app.route('/restaurants/:restaurant_id')
    .delete(remove_restaurant);
}