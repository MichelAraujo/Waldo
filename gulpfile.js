const gulp = require('gulp');
const mocha = require('gulp-mocha');
const util = require('gulp-util');

gulp.task('test', () => {
  return gulp.src(['tests/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', util.log);
});
