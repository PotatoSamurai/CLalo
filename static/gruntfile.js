module.exports = function(grunt){
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files:[{
          expand: true,
          cwd: 'assets/sass/',
          src: ['*.scss'],
          dest: 'assets/css/',
          ext: '.css'
        }]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: [{
          expand: true,
          cwd: 'assets/js/dev',
          src: '**/*.js',
          dest: 'assets/js/prod'
        }]
      }
    },
    jshint:{
      all: ['gruntfile.js', 'assets/dev/**/*.js']
    },
    watch: {
      css: {
        files: 'assets/sass/*.scss',
        tasks: ['sass'],
        options: {
          spawn:false
        }
      },
      js:{
        files: ['assets/js/dev/**/*.js'],
        tasks: ['uglify:build'],
        options: {
          spawn:false
        }
      },
      jshint:{
        task:['jshint:all'],
        options: {
          spawn:false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['sass','uglify','jshint']);
};
