/* global module */

var jsFiles = [
  'lib/konami-code.js',
  'Gruntfile.js'
]

module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig({
    watch: {
      js: {
        files: jsFiles,
        tasks: ['jshint', 'uglify'],
        options: {
          debounceDelay: 500
        }
      }
    },
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
    },
    jshint: {
      files: jsFiles,
      options: {
        camelcase: true,
        curly: true,
        eqeqeq: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        plusplus: true,
        quotmark: 'single',
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        maxparams: 3,
        maxlen: 80,
        asi: true
      }
    }
  })

  grunt.registerTask('default', 'watch')
}
