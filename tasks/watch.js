/**
 *  Grunt - Contrib - Watch
 *  =======================
 *
 *  Site:   https://github.com/gruntjs/grunt-contrib-watch
 */

module.exports = function ( grunt ) {

  return {


    check: {

      options: {

        livereload: true // PORT: 35729
      },

      files: [ 'dist/change-2.tmp' ],
      tasks: [                     ]
    },


    assets: {

      files: [ 'public/assets/**' ],
      tasks: [ 'copy:assets'      ]
    },


    code: {

      files: [ '<%= browserify.dev.src %>', 'dist/change.tmp' ],
      tasks: [ 'browserify',                                  ] //  'uglify'
    },


    document: {

      files: [ '<%= stylus.document.files %>' ],
      tasks: [ 'newer:stylus:document'               ]
    },


    elements: {

      files: [ '<%= stylus.elements.files %>' ],
      tasks: [ 'newer:stylus:elements'               ]
    }

  };
};
