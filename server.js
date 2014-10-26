
/**
 * Module dependencies
 */

var express        = require('express'),
    //bodyParser     = require('body-parser'),
    //methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    swig           = require('swig'),
    routes         = require('./server/routes'),
    api            = require('./server/api'),
    http           = require('http'),
    path           = require('path');

var server =  express();


/**
 * Configuration
 */

// environments
server.set('port', process.env.PORT || 3000);
server.set('views', __dirname + '/views');

// use swig template engine
server.set('view engine', 'html');
server.engine('html', require('swig').renderFile);
//server.use(morgan('dev'));
//server.use(bodyParser());
//server.use(methodOverride());
server.use(express.static(__dirname + '/public'));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  server.use(errorHandler());
  server.set('view cache', false);
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

server.get('/', routes.index);

// JSON API
server.get('/api/posts', api.postList);
server.get('/api/post/:postId', api.post);

// redirect all others to the index (HTML5 history)
server.get('*', routes.index);

/**
 * Start Server
 */

server.listen(server.get('port'));
console.log('Express server listening on port ' + server.get('port'));
