/**
 *  CORS
 *  ====
 *
 *  Handling cross origin request towards the domain.
 */

var config = require('../../config');

module.exports = function ( domains ) {

  domains = config.domains.concat( domains || []);

  return function ( req, res, next ) {

    var origin  = req.headers.origin || '*';

    if ( domains.indexOf(origin) > -1 ) {

      var headers = 'X-Requested-With, Content-Type, Authorization, Accept';

      res.setHeader('Access-Control-Allow-Origin',      origin  );
      res.setHeader('Access-Control-Allow-Credentials', true    );
      res.setHeader('Access-Control-Allow-Headers',     headers );
    }

    if ( req.method === 'OPTIONS' ) return res.end();

    next();
  };

};
