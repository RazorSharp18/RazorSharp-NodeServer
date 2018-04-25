import { loginWithAuth0 } from '../modules/users/controller';

export default function (app) {
    // get Routes for Restaurants
    app.route('/users/auth0')
      .post(loginWithAuth0);
  }
