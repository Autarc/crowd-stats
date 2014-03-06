/**
 *  Grunt - nodemon
 *  ===============
 *
 *  Site:   https://github.com/ChrisWren/grunt-nodemon
 */

module.exports = function ( grunt ) {

  return {

    dev: {

      script: 'index.js',

      options: {

        // nodeArgs: [ '--debug' ],

        ext: '.js,.jsx',

        ignore: [ 'dist/**' ]
      }
    }

  };
};
