/* global require, __dirname */

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var KarmaServer = require('karma').Server;

gulp.task('default', ['copy', 'scripts', 'css']);

gulp.task('clean', function(done) {
  return del('build', done);
});

gulp.task('test', function(done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('css', ['clean'], function() {
  return gulp.src('css/app.css')
    .pipe(concatCss('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});

gulp.task('copy', ['clean'], function() {
  return gulp.src([
    './bower_components/**',
    './templates/*.html',
    './font/*.woff',
    './img/*.{png,jpg}',
    './index.html'
  ], {base: './'})
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch([
    './bower_components/**',
    './templates/**',
    './css/**',
    './js/**',
    './font/**',
    './img/**',
    './index.html'
  ], ['default']);
});
