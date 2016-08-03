/* jshint node: true */

'use strict';

var APP_NAME = 'app';
var RESULT_FOLDER = 'dist';

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', [
  'copy',
  'scripts',
  'styles'
]);

gulp.task('debug', [
  'copy',
  'scripts:debug',
  'styles:debug'
]);

gulp.task('clean', function(done) {
  return del(RESULT_FOLDER, done);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(concat(APP_NAME + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(RESULT_FOLDER + '/scripts'));
});

gulp.task('scripts:debug', ['clean'], function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat(APP_NAME + '.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(RESULT_FOLDER + '/scripts'));
});

gulp.task('styles', ['clean'], function() {
  return gulp.src('app/styles/index.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat(APP_NAME + '.min.css'))
    .pipe(gulp.dest(RESULT_FOLDER + '/styles'));
});

gulp.task('styles:debug', ['clean'], function() {
  return gulp.src('app/styles/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(APP_NAME + '.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(RESULT_FOLDER + '/styles'));
});

gulp.task('copy', ['clean'], function() {
  return gulp.src([
      'app/bower_components/**/*',
      'app/templates/*.html',
      'app/views/*.html',
      'app/styles/fonts/*.woff',
      'app/images/*.{png,jpg}',
      'app/index.html'
    ], {
      base: 'app'
    })
    .pipe(gulp.dest(RESULT_FOLDER));
});

gulp.task('watch', ['debug'], function() {
  gulp.watch('app/**/*', ['debug']);
});
