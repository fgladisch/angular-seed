var APP_NAME = 'app';

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var KarmaServer = require('karma').Server;

gulp.task('default', ['copy_app', 'copy_bower', 'scripts', 'css']);

gulp.task('debug', ['copy_app', 'copy_bower', 'scripts_debug', 'css']);

gulp.task('test', ['clean_test'], function(done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('clean', function(done) {
  return del('build', done);
});

gulp.task('clean_test', function(done) {
  return del('coverage', done);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(concat(APP_NAME + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('scripts_debug', ['clean'], function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat(APP_NAME + '.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('css', ['clean'], function() {
  return gulp.src('./app/styles/**/*.css')
    .pipe(concatCss(APP_NAME + '.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/styles'));
});

gulp.task('copy_bower', ['clean'], function() {
  return gulp.src('./bower_components/**/*', {base: './'})
    .pipe(gulp.dest('build'));
});

gulp.task('copy_app', ['clean'], function() {
  return gulp.src([
    './app/templates/*.html',
    './app/styles/font/*.woff',
    './app/images/*.{png,jpg}',
    './app/index.html'
  ], {base: './app'})
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['debug'], function() {
  gulp.watch('./app/**/*', ['debug']);
});
