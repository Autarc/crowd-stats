/**
 *  Grunt - Open
 *  ============
 *
 *  Site:   https://github.com/jsoverson/grunt-open
 */

module.exports = function ( grunt ) {

  return {

    dev: {

      // options: {
      //   openOn: 'ready'
      // },

      path: 'http://localhost:8080', //
      app: 'google-chrome-unstable'
    }

    //   file : {
    //     path : '/etc/hosts'
    //   },
    //   custom: {
    //     path : function () {
    //       return grunt.option('path');
    //     }
    //   }
    // }
  };

};
