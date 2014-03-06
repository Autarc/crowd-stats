/**
 *  Grunt - concurrent
 *  ==================
 *
 *  Site:   https://github.com/sindresorhus/grunt-concurrent
 */

module.exports = function ( grunt ) {

  return {

    dev: {

      options: {

        logConcurrentOutput: true
      },

      tasks: [ 'nodemon', 'watch' ] // 'open'
    }

  };
};
