const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const baseDir = 'src/css/';

gulp.src([
baseDir + 'styles.css'
])
 .pipe(concat('styles.min.css'))
 .pipe(cssnano())
 .pipe(gulp.dest('src/css/'));
