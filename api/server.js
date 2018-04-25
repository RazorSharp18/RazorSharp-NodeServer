import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dbConfig from '../api/config/db';
import middlewaresConfig from './config/middlewares';

const  app = express();
const  port = process.env.PORT || 3001;
// var Restaurant = require('./api/models/restaurantModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/RazorLive'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//figure out a way to initialize all the routes easily.
import routes from './routes/restaurantRoutes'; //importing route
routes(app); //register the restaurant routes

import routes2 from './routes/userRoutes';
routes2(app);

/**
* Database
*/
dbConfig();
/**
* Middlewares
*/
middlewaresConfig(app);




app.listen(port);

export default app;

console.log('todo list RESTful API server started on: ' + port);