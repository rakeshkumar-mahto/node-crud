var Express = require('express'),
    BodyParser = require('body-parser'),
    Passport = require('passport'),
    Mongoose = require('mongoose'),
    Morgan = require('morgan'),
    appConfig = require('./config/config'),
    path = require('path');

// Setup database
Mongoose.connect('mongodb://' + appConfig.database.host + '/' + appConfig.database.dbName);
Mongoose.connection;

// Init App
var App = Express();

// middleware
App.use(BodyParser.json({ limit: '50mb' })); // Set request size

// create application/x-www-form-urlencoded parser
App.use(BodyParser.urlencoded({ limit: '50mb', extended: true }));
App.use(Morgan('dev'));

App.set('views', __dirname + '/views');
App.set('view engine', 'ejs');
require('./routes/index')(App);

// Set port
App.set('port', (process.env.PORT || appConfig[appConfig.server].port));
App.set('host', (process.env.HOST || appConfig[appConfig.server].host));

App.listen(App.get('port'), function () {
    console.log('Server started at ' + App.get('host') + ':' + App.get('port'));
});
