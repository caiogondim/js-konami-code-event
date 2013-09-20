module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')

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
    },
    jshint: {
      files: ['lib/konami-code.js'],
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
}
