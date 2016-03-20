'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');

gulp.task('compile', ['injector'], done => {
	webpackConfig.devtool = 'inline-source-map';

	webpack(webpackConfig, webPackComplete(done));
});

gulp.task('compile:dist', ['injector'], done => {
	webpackConfig.output.path = 'dist/scripts';
	webpackConfig.plugins = [
        new webpack.optimize.UglifyJsPlugin()
    ];

	webpack(webpackConfig, webPackComplete(done));
});

function webPackComplete(callback) {
	return function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack', err);
		}

		gutil.log('[webpack]', stats.toString());

		callback();
	};
}