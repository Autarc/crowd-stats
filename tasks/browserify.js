/**
 *  Grunt - Browserify
 *  ==================
 *
 *  Site:  https://github.com/jmreidy/grunt-browserify
 */

module.exports = function ( grunt ) {

  return {

    options: {

      debug: true,  // debug info
      transform: [ 'reactify' ],
      extension: [ '.jsx' ]
    },


    dev: {

      options: {

        alias: [ 'react:' ],

        postBundleCB: function ( err, src, next ) {

          setTimeout( function(){

            grunt.file.write( 'dist/change-2.tmp', new Date().toString() );

          }, 500 );

          next( err, src );
        }
      },

      src: [ 'public/code/client.js' ], // ~ main

      dest: '<%= dist %>/code/bundle.js'
    }

  };
};
