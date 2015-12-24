'use strict';

var argv = require('yargs').argv;
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jade = require('gulp-jade');
var minifyHTML = require('gulp-minify-html');

gulp.task('templates', function() {

  var OPTS = {
    conditionals: true,
    spare: true
  };

  gulp.src('./src/views/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulpif(argv.production, minifyHTML(OPTS)))
    .pipe(gulp.dest('./dist'))

});
