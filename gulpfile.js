'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const project = path.resolve(ROOT,'baorr.github.io');
const mudule = path.resolve(project, 'css/ui');

gulp.task('sass', function () {
  return gulp.src('./sass/app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/app'));
});

gulp.task('ui', function () {
  return gulp.src('./sass/ui/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/ui'));
});


gulp.task('baorr', function () {
  return gulp.src('./sass/ui/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(mudule));
});