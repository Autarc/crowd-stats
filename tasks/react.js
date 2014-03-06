/**
 *  Grunt - React
 *  =============
 *
 *  Site:   https://github.com/ericclemmons/grunt-react
 */

module.exports = function ( grunt ) {

  return {


    page: {

      files: [{

        expand: true,
        cwd: 'src/page/',
        src: [
          '**.jsx',
          '*/**.jsx'
        ],
        dest: '<%= dist %>/page/',
        ext: '.js'
      }]
    },


    elements: {

      files: [{

        expand: true,
        cwd: 'src/elements/',
        src: [ '*/**.jsx' ],
        dest: '<%= dist %>/elements/',
        ext: '.js'
      }]
    },


    routes: {

      files: [{

        expand: true,
        cwd: 'src/routes/',
        src: [
          '**.jsx',
          '*/**.jsx',
          '*/*/**.jsx'
        ],
        dest: '<%= dist %>/routes/',  // TODO: change, server side routing != client side ?
        ext: '.js'
      }]
    }


  };
};
