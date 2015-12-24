'use strict';

var argv = require('yargs').argv;
var browser = require('browser-sync');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('watch:browserify', ['browserify'], browser.reload);

gulp.task('browserify', function() {

  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/assets/js/app.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(rename('package.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    // Add transformation tasks to the pipeline here.
    .pipe(gulpif(argv.production, uglify()))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/assets/js'));
});
