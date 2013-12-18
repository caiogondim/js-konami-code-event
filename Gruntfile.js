/* global module */

var jsFiles = [
  'src/konami-code.js'
, 'Gruntfile.js'
, 'test/spec.js'
]

module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-notify')
  grunt.loadNpmTasks('grunt-karma')

  grunt.initConfig({
    watch: {
      js: {
        files  : jsFiles
      , tasks  : ['jshint', 'uglify']
      , options: {
          debounceDelay: 500
        }
      }
    }
  , uglify: {
      options: {
        report   : 'gzip'
      , sourceMap: './src/konami-code.map'
      }
    , main: {
        files: {
          './src/konami-code.min.js': './src/konami-code.js'
        }
      }
    }
  , jshint: {
      files  : jsFiles
    , options: grunt.file.readJSON('.jshintrc')
    }
  , karma: {
      options: {
        files: [
          'test/helpers/jquery.js'
        , 'test/helpers/jasmine-jquery.js'
        , 'src/konami-code.js'
        , 'test/spec.js'
        ]
      , frameworks: ['jasmine']
      , browsers: ['Chrome', 'Firefox']
      }
    , dev: {
        singleRun: true
      }
    }
  })

  grunt.registerTask('watch', 'watch')
  grunt.registerTask('test', ['jshint', 'karma'])
  grunt.registerTask('build', ['jshint', 'uglify:main'])
}
