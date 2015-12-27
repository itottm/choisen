var gulp = require('gulp');

gulp.task('default', ['clean']);

var runSequence = require('run-sequence');

gulp.task('default', function () {
  runSequence(
    'clean',
    ['compile-sass', 'compile-scss'],
    'webpack'
  );
});