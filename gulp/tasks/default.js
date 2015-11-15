var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
 var sourcemaps = require('gulp-sourcemaps');
 var stream = require('webpack-stream');
var WebpackDevServer = require("webpack-dev-server");
var WebpackConfigParams = require("../../webpack.config.js").params;
var webpackConfig = require("../../webpack.config.js");

const config = require('../config');



gulp.task("default", ["webpack-dev-server"]);


gulp.task("webpack", function(callback) {
    // run webpack
    return gulp.src('../../public/js/entry.js')
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest('../../public/build/'));

});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, WebpackConfigParams)

    .listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('watch', function() {
    // gulp.watch("*.html", ['html-watch']);
    // gulp.watch(config.css.src, ['css-watch']);
    // gulp.watch(config.js.src, ['js-watch']);
    gulp.watch(config.less.src, ['less']);
});