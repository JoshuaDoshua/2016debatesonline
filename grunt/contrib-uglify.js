/**
 *	SEE https://github.com/gruntjs/grunt-contrib-uglify
 */

module.exports = function(grunt)
{
  grunt.config('uglify', {

    dist: {
      // options: {
      //   sourceMap: true
      // },
      files: {
        '<%= dir.dist.js %>/scripts.min.js': '<%= dir.build.js %>/scripts.all.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
