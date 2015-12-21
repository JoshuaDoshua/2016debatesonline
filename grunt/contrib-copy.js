/**
 * 	SEE https://github.com/gruntjs/grunt-contrib-copy
 */

 module.exports = function(grunt)
 {
   grunt.config('copy', {

    sourceMaps: {
      expand: true,
      flatten: false,
      cwd: '<%= dir.build.css %>/',
      src: ['**/*.map', 'styles.all.css'],
      dest: '<%= dir.dist.css %>/',
    }
  });

   grunt.loadNpmTasks('grunt-contrib-copy');
 };
