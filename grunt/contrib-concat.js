/**
 *	SEE https://github.com/gruntjs/grunt-contrib-concat
 */

module.exports = function(grunt)
{
  grunt.config('concat', {

    depStyles: {
      src: [
        '<%= dir.src.bower %>/reset-css/reset.css',
        '<%= dir.src.bower %>/magnific-popup/dist/magnific-popup.css',
      ],
      dest: '<%= dir.build.css %>/styles.deps.css'
    },
    styles: {
      src: [
        '<%= dir.build.css %>/styles.deps.css',
        '<%= dir.build.css %>/styles.css',
      ],
      dest: '<%= dir.build.css %>/styles.all.css',
    },
    depScripts: {
      src: [
        '<%= dir.src.bower %>/ua-parser-js/dist/ua-parser.min.js',
        // '<%= dir.src.bower %>/jquery/dist/jquery.min.js',
        '<%= dir.src.bower %>/magnific-popup/dist/jquery.magnific-popup.min.js',
      ],
      dest: '<%= dir.build.js %>/scripts.deps.js'
    },
    scripts: {
      src: [
        '<%= dir.build.js %>/scripts.deps.js',
        '<%= dir.src.js %>/data.js',
        '<%= dir.src.js %>/script.js'
      ],
      dest: '<%= dir.build.js %>/scripts.all.js'
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
