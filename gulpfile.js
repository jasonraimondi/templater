'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp');

// Builds the project
gulp.task('default', ['sass', 'browserify', 'templates', 'images:cache']);

gulp.task('build', ['sass', 'browserify', 'templates', 'images:build']);

// Runs all of the above tasks and then waits for files to change
gulp.task('watch', ['sass', 'browserify', 'templates'], function() {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
  gulp.watch('./src/assets/js/**/*.js', ['browserify']);
  gulp.watch('./src/views/**/*.jade', ['templates']);
});
