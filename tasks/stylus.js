/**
 *  Grunt - Contrib - Stylus
 *  ========================
 *
 *  Site:   https://github.com/gruntjs/grunt-contrib-stylus/
 */

module.exports = function ( grunt ) {

  return {

    options: {

      compress: true, // false

      paths: [ 'public/style/' ],

      import: [ 'nib', 'colors.styl', 'icons.styl' ]//, 'settings.styl' ],
    },



    document: { // page

      files: {

        '<%= dist %>/style/document.css': [
          'public/document/**.styl',
          'public/document/*/**.styl'
        ]

      }
    },


    elements: {

      files: [{

        // expand: true,
        // cwd: 'public/elements/',
        src: [
          'public/elements/*/**.styl',
          'public/elements/*/*/**.styl',
          'public/elements/*/*/*/**.styl'
        ],
        dest: '<%= dist %>/style/elements.css',
      }]
    },


    vendor: {

      files: [{

        src: [ 'public/vendor/*/**.css' ],
        dest: '<%= dist %>/style/vendor.css'
      }]
    }

  };
};
