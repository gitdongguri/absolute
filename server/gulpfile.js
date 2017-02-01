var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  console.log('gult init task');
  console.log(__filename);
  return gulp.src(['../client/**/*.{js,jsx}','**/*.{js,jsx}','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  console.log('gult watch task');
  gulp.watch(['**/*.{js,jsx}','../client/**/*.{js,jsx}','!node_modules/**'], ['lint']);
});

gulp.task('default', ['watch'], function () {
  console.log('gult default watch task');
  console.log('gult default watch task');
});

