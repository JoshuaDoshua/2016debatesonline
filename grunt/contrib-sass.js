/**
 * SEE https://github.com/gruntjs/grunt-contrib-sass
 */

module.exports = function(grunt)
{
	grunt.config('sass', {

		options: {
			style: 'nested',
			compass: true
		},
		build: {
			files: {
				'<%= dir.build.css %>/styles.css': '<%= dir.src.sass %>/styles.scss'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};
