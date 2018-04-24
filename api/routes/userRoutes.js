import * as razorlive from '../modules/users/controller';

import { Router } from 'express';

// import * as UserController from './controller';

const routes = new Router();
routes.post('/users/auth0', razorlive.loginWithAuth0);

export default routes;
// module.exports = function(app) {
//   // get Routes for Restaurants
//   app.post('/users/auth0', function(req, res){
//     (razorlive)
//   });
  
// };