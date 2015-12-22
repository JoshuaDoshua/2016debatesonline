/**
 *  SEE https://github.com/spatools/grunt-html-build
 *
 *	alt hhttps://github.com/dciccale/grunt-processhtml
 */

module.exports = function(grunt)
{
	grunt.config('htmlbuild', {

		dist: {
      src: '<%= dir.src.html %>/index.html',
			dest: '<%= public %>',
			options: {
				styles: {
					dist: ['<%= dir.dist.css %>/**/*.css']
				},
				scripts: {
					dist: ['<%= dir.dist.js %>/**/*.js']
				},
				sections: {
					head: '<%= dir.src.html %>/head.html',
					candidates: '<%= dir.src.html %>/candidates.html',
					videos: '<%= dir.src.html %>/videos.html',
					footer: '<%= dir.src.html %>/footer.html',
					about: '<%= dir.src.html %>/about.html',
					share: '<%= dir.src.html %>/share.html',
					bug: '<%= dir.src.html %>/bug.html',
					noVideo: '<%= dir.src.html %>/no-video.html',
					svg: {
						dem: '<%= dir.src.svg %>/dem.svg',
						gop: '<%= dir.src.svg %>/gop.svg'
					}
				},
				logOptions: true,
			}
    }

	});

  grunt.loadNpmTasks('grunt-html-build');
};
