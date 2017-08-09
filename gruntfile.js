'use strict'

module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['build/'],

    copy: {
      html: {
        files: [
          {
            cwd: 'src/',
            src: 'index.html',
            dest: 'build/',
            expand: true
          }
        ]
      },
      views: {
        files: [{
          cwd: 'src/views/',
          src: ['*.html'],
          dest: 'build/views/',
          expand: true
        }]
      },
      images: {
        files: [
          {
            cwd: 'src/img',
            src:['*.jpg'],
            dest: 'build/img/',
            expand: true
          }
        ]
      },
      angular: {
        files: [
          {
            cwd: 'node_modules/angular',
            src: ['angular.js'],
            dest: 'build/',
            expand: true
          }
        ]
      },
      uirouter: {
        files: [
          {
            cwd: 'node_modules/angular-ui-router/release',
            src: ['angular-ui-router.js'],
            dest: 'build/',
            expand: true
          }
        ]
      },
      bootstrap: {
        files: [
          {
            cwd: 'node_modules/bootstrap/dist/css',
            src: ['bootstrap.css', 'bootstrap-theme.css'],
            dest: 'build/',
            expand: true
          }

        ]
      },
    },
      sass: {
        allSass: {
          files: {
            'build/style.css' : 'src/sass/main.scss'
          }
        }
      },
      babel: {
        all: {
          options: {
            sourceMap: true,
            presets: ['es2015']
          },
          files: {
            'build/js/app.js' : 'build/js/app.js'
          }
        }
      },
      concat: {
        dist: {
          src: ['src/js/awesome.module.js', 'src/js/**/*.js'],
          dest: 'build/js/app.js'
        }
      },
      watch: {
        css: {
          files:['src/sass/*.scss'],
          tasks: ['sass']
        },
        html: {
          files:['src/index.html', 'src/views/*.html'],
          tasks: ['copy']
        },
        js: {
          files:['src/js/*.js'],
          tasks: ['concat', 'babel']
        },
      }
  });

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('build', ['clean', 'concat', 'sass', 'copy']);

};
