/**
 *  Routes
 *  ======
 *
 *  Delegate + Cache the results from JSX rendered bundles / dynamic sites to create pages.
 */

var path = require('path'),
    glob = require('glob');

/**
 *  [exports description]
 *
 *  @param  {[type]} dir [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app, callback ) {

  require('node-jsx').install();

  var PATTERN = path.resolve( __dirname, '../../routes/**' ); // config ?

  glob( PATTERN, function ( err, routes ) {

    if ( err ) throw new Error(err);

    routes = routes.filter(function ( route ) { return (/\.js|x/).test( route ); });

    routes.forEach(function ( route ) {
      require( route )( app );
    });

    callback( err );
  });
};
