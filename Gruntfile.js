module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// DIRECTORIES
		public:	'',
		src: 		'src',
		build: 	'limbo',
		dist: 	'assets',

		dir: {
			src: {
				bower: 	'<%= src %>/bower',
				sass: 	'<%= src %>/sass',
				js: 		'<%= src %>/js',
				html:		'<%= src %>/html',
				svg:		'<%= src %>/svg'
			},
			build: {
				css:	'<%= build %>/css',
				js:		'<%= build %>/js',
			},
			dist: {
				css:	'<%= dist %>/css',
				js:		'<%= dist %>/js',
			}
		}
  });

	// show diagnostics on timings
	require('time-grunt')(grunt);

	// load tasks from grunt directory
	grunt.loadTasks('grunt');

	grunt.loadNpmTasks('grunt-contrib-watch');

	// GRUNT TASKS
	grunt.registerTask('styles', [
		'sass:build',
		'autoprefixer:build',
		'concat:styles',
		'cssmin:dist',
		'notify:styles',
	]);


	grunt.registerTask('scripts', [
		'jshint:beforeconcat',
		'concat:scripts',
		'uglify',
		'notify:scripts',
	]);

	// templates
	grunt.registerTask('templates', [
		'htmlbuild',
		'notify:html'
	]);

	// bower
	grunt.registerTask('bower',[
		'concat:depStyles',
		'concat:styles',
		'cssmin',
		'concat:depScripts',
		'uglify',
		'notify:bower'
	]);

	// manually call ALL THE TASKS
	grunt.registerTask('default', [
		'sass',
		'concat:depStyles',
		'autoprefixer',
		'concat:styles',
		'cssmin',
		'jshint',
		'concat:depScripts',
		'concat:scripts',
		'uglify',
		'htmlbuild',
		'notify:dist',
		'watch'
	]);
};
