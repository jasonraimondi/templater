'use strict';

var gulp = require('gulp');

var FILES = [
  './src/assets/fonts',
  './src/assets/videos',
  './src/assets/vendor'
];

// Copies static assets
gulp.task('copy', function() {
  gulp.src(FILES)
    .pipe(gulp.dest('./dist/assets/'));
});
