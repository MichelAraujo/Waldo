const gulp = require('gulp');
const mocha = require('gulp-mocha');
const util = require('gulp-util');
const jshint = require('gulp-jshint');
const git = require('gulp-git');
const istanbul = require('gulp-istanbul');

gulp.task('jshint', () => {
  return gulp.src('src/**/*.js')
  	.pipe(jshint())
  	.pipe(jshint.reporter('default'))	
});

gulp.task('test', () => {
  return gulp.src(['tests/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', util.log);
});

gulp.task('push-dev', () => {
  return git.push('origin', 'develop', (err) => {
  	if (err) throw err;
  });
});

gulp.task('pre-test', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('coverage', ['pre-test'], function () {
  return gulp.src(['tests/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 80 } }));
});

gulp.task('default', ['jshint', 'test']);
