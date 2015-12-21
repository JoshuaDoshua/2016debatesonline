/**
 *	SEE https://github.com/gruntjs/grunt-contrib-watch
 */

module.exports = function(grunt)
{
  grunt.config('watch', {

    styles: {
      files: [
        '<%= dir.src.sass %>/mix/*.scss',
        '<%= dir.src.sass %>/base/*.scss',
        '<%= dir.src.sass %>/part/*.scss',
        '<%= dir.src.sass %>/tpl/*.scss',
        '<%= dir.src.sass %>/styles.scss'
      ],
      tasks: ['styles']
    },
    scripts: {
      files: [
        '<%= dir.src.js %>/**/*.js'
      ],
      tasks: ['scripts']
    },
    templates: {
        files: [
          '<%= dir.src.html %>/**/*'
        ],
        tasks: ['templates']
    },
    bower: {
      files: [
        'grunt/contrib-concat.js',
        '<%= dir.src.bower %>/**/*',
      ],
      tasks: ['bower']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
