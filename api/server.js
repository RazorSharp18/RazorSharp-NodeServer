import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

const  app = express();
const  port = process.env.PORT || 3001;
// var Restaurant = require('./api/models/restaurantModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/RazorLive'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import Restaurant from './models/restaurantModel'; //created model loading here

import routes from './routes/restaurantRoutes'; //importing route
routes(app); //register the route
// import routes2 from './routes/userRoutes';
// routes2(app);


app.listen(port);

export default app;

console.log('todo list RESTful API server started on: ' + port);