/**
 *	SEE https://github.com/nDmitry/grunt-autoprefixer
 */

module.exports = function(grunt)
{
  grunt.config('autoprefixer', {

    options: {
      browsers: ['last 2 versions', 'ie 9']
    },
    build: {
      expand: true,
      flatten: true,
      src: '<%= dir.build.css %>/styles.all.css',
      dest: '<%= dir.build.css %>/'
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
};
