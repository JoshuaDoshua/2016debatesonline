/**
 *	SEE https://github.com/gruntjs/grunt-contrib-cssmin
 */

module.exports = function(grunt)
{
  grunt.config('cssmin', {

    options: {
      shorthandCompacting: false,
      roundingPrecision: -1,
      // sourceMap: true
    },
    dist: {
      files: {
        '<%= dir.dist.css %>/styles.min.css': ['<%= dir.build.css %>/styles.all.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
