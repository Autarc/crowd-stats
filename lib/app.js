/**
 *  App
 *  ===
 *
 *
 */



var server = require('./server');

// server layer, just start after initial couch connnection
server.init( function ( err )  {

  if ( err ) throw err;

  server.start();
});


// using browserify itself - without relyig on the express - middleware in bewteen,
// easier switch to KOA
