/**
 *  Configuration
 *  =============
 *
 *  Define setup for different environments.
 */

var environments = {

  'development': require('./development'),
  'production':  require('./production')
};

module.exports = environments[ process.env.NODE_ENV || 'development' ];
