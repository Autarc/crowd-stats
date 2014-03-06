/**
 *  Configuration - Development
 *  ===========================
 *
 *
 */

var path = require('path');

module.exports = {

  'port': process.env.PORT || 8080,
  'domains': [ '*', 'http://localhost:8080' ], // = localhost

  'static': path.resolve( __dirname, '../dist'  ),  //
  'routes': path.resolve( __dirname, './routes' )
};
