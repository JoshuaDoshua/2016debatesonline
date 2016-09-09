/**
 *	SEE https://github.com/gruntjs/grunt-contrib-jshint
 */

module.exports = function(grunt)
{
  grunt.config('jshint', {

    beforeconcat: [
			'<%= dir.src.js %>/data.js',
      '<%= dir.src.js %>/script.js'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
