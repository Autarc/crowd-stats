/**
 *  Server
 *  ======
 *
 *
 */


var server = exports;


var fs      = require('fs'),
    path    = require('path'),

    http    = require('http'),
    express = require('express'),
    config  = require('../config');

var middleware = require('./middleware');

var app = express();


/**
 *  [init description]
 *
 *  @param  {Function} callback [description]
 *  @return {[type]}            [description]
 */
server.init = function ( callback ) {

  setupMiddleware();

  defineRoutes(function ( err ) {
    callback( err );
  });
};


/**
 *  [start description]
 *
 *  @param  {[type]} port [description]
 *  @return {[type]}      [description]
 */
server.start = function ( port ) {

  port = port || config.port;

  http.createServer(app).listen( port, function(){
    console.log('\n\t[LISTENING] - Port: %s | Adress: http://localhost:%s\n', port, port );
    fs.writeFileSync( path.resolve( __dirname, '../dist/change.tmp'), new Date().toString() );
  });
};


/**
 *  [setupMiddleware description]
 *
 *  @return {[type]} [description]
 */
function setupMiddleware(){

  app.configure(function(){

    app.use(express.logger('dev'));
    // app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    app.use(express.compress());
    app.use(express.methodOverride());
    app.use(express.json());
    app.use(express.urlencoded());

    app.use(middleware.cors());
    app.use(express.static( config.static )); // TODO: handle with a seperate service
    // app.use(app.router); // enabled by default ?
  });
}


/**
 *  [defineRoutes description]
 *
 *  @return {[type]} [description]
 */
function defineRoutes ( callback ) {

  middleware.routes( app, callback );
}
