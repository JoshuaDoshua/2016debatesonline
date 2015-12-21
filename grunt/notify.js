/**
 *	SEE https://github.com/dylang/grunt-notify
 */

module.exports = function(grunt)
{
  grunt.config('notify', {

    scripts: {
      options: {
        message: 'Scripts Updated'
      }
    },
    styles: {
      options: {
        message: 'Styles Updated'
      }
    },
    dist: {
      options: {
        message: 'Package Updated'
      }
    },
    bower: {
      options: {
        message: 'Bower dependencies updated'
      }
    },
    html: {
      options: {
        message: 'HTML Templates Compiled'
      }
    }
  });
  grunt.loadNpmTasks('grunt-notify');
};
