var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var karma = require('karma').server;
var path = require('path');
var karmaConfig = require('./karma.config.js');
var jsHintStylish = require('jshint-stylish');

var SOURCE_PATH = path.join(__dirname, 'src/**/*.js');
var KARMA_CONFIG_PATH = path.join(__dirname, 'karma.config.js');

gulp.task('js:hint', function() {
	return gulp.src(SOURCE_PATH)
			.pipe($.jshint('.jshintrc'))
			.pipe($.jshint.reporter(jsHintStylish));
});


gulp.task('js:test', ['js:hint'], function(done) {
	var karmaConfig = {
		configFile: KARMA_CONFIG_PATH
	};

	karma.start(karmaConfig, done);
});

gulp.task('js:tdd', ['js:hint'], function(done) {
	var karmaConfig = {
		configFile: KARMA_CONFIG_PATH,
		singleRun: false,
		autoWatch: true
	};

	karma.start(karmaConfig, done);
});
