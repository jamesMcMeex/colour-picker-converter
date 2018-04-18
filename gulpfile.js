/* eslint no-unused-expressions: "off" */

'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('clean', () => {
	del(['app']);
});

gulp.task('html-copy', () => {
	gulp.src(['./src/*.html']).pipe(gulp.dest('app'));
});

gulp.task('js-copy', () => {
	gulp.src(['./src/js/*.js']).pipe(gulp.dest('./app/js'));
});

// Task to just build everything once
gulp.task('build', () => {
	gulp.start('html-copy', 'js-copy', 'sass');
})

// Static Server + watching files
gulp.task('serve', ['build'], function() {
	browserSync.init({
		server: './app'
	});

	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js-copy']).on('change', browserSync.reload);
	gulp.watch('src/*.html', ['html-copy']).on('change', browserSync.reload);
});

gulp.task('sass', () => {
	gulp
		.src('./src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
});

// Build everything and then fire up the static server
gulp.task('run', ['clean'], () => {
	gulp.start('serve');
});

// Compile site
gulp.task('default', ['clean'], () => {
	gulp.start('build');
});
