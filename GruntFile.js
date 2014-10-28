module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false
        },
        src: ['test/**/*.js']
      }
    }
  });  

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', [
    'mochaTest'
  ]);
};