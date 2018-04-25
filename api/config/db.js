// import mongoose from 'mongoose';
var mongoose = require('mongoose');

// import devConfig from './config';
var devConfig = require('./confg');
const dbConfig = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(devConfig.DB_URL);
    mongoose.set('debug', true);
    mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));
};

module.exports = dbConfig;