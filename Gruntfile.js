module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.initConfig({
    uglify: {
      options: {
        report: 'gzip',
        sourceMap: './lib/konami-code.map'
      },
      main: {
        files: {
          './lib/konami-code.min.js': './lib/konami-code.js'
        }
      }
    }
  })
}
