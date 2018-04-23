'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('pret', function () {
  return gulp.src('./sass/app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/app'));
});