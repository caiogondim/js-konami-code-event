module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      files: ['lib/konami-code.js']
    }
  });

  grunt.registerTask('test', ['jshint']);
};
