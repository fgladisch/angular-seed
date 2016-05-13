/* jshint node: true */

'use strict';

var APP_NAME = 'app';

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', [
  'copy',
  'scripts',
  'styles'
]);

gulp.task('debug', [
  'copy',
  'scripts_debug',
  'styles'
]);

gulp.task('clean', function(done) {
  return del('build', done);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(concat(APP_NAME + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('scripts_debug', ['clean'], function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat(APP_NAME + '.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('styles', ['clean'], function() {
  return gulp.src('app/styles/**/*.css')
    .pipe(concatCss(APP_NAME + '.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/styles'));
});

gulp.task('copy', ['clean'], function() {
  return gulp.src([
      'app/bower_components/**/*',
      'app/templates/*.html',
      'app/styles/font/*.woff',
      'app/images/*.{png,jpg}',
      'app/index.html'
    ], {
      base: 'app'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['debug'], function() {
  gulp.watch('app/**/*', ['debug']);
});
