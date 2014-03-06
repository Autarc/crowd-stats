/**
 *  Grunt Configurations
 *  ====================
 *
 *  Setup for the build process using GruntJS (JavaScript task runner):
 *
 *     http://gruntjs.com/
 *
 *  The files will by default exported into the "<%= dist %>/" directory,
 *  relative to the current root path of the project.
 */

module.exports = function ( grunt ) {

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  require('load-grunt-config')( grunt, {

    configPath: __dirname + '/tasks',

    config: {

      dist: 'dist'
    }

  });


  var READY = false;

  grunt.registerTask('signalReady', 'Signal the ready state to open a browser', function(){

    if ( READY ) return;

    READY = true;

    console.log('ready');

    grunt.event.emit('serverReady');
  });

};
