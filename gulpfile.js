// Javascript strict mode
'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    nodemon = require('gulp-nodemon');

// javascript
gulp.task('js', function() {
    gulp.watch('js/**/*.js', function() {
        gulp.src('js/**/*.js')
            .pipe(concat('common.js'))
            .pipe(gulp.dest('app/js'));
    });
});

// css
gulp.task('css', function() {
    gulp.watch('css/**/*.styl', function() {
        gulp.src('css/style.styl')
            .pipe(stylus({
                'include css': true
            }))
            .pipe(gulp.dest('app/css'));
    });
});


// server
gulp.task('server', function() {
    nodemon({
        script: 'index.js',
        ignore: ['*']
    });
});

gulp.task('dev', ['css', 'js', 'server']);
