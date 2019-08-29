var gulp        = require('gulp');
var browserSync = require('browser-sync');

var bs1 = browserSync.create("proxy1");
var bs2 = browserSync.create("proxy2");

var bs1WatchConfig = ["./**/*.php","./**/*.html","./**/*.css","./**/*.js","./**/*.jpg","./**/*.png","./**/*.gif"];
var bs2WatchConfig = ["./**/*.php","./**/*.html","./**/*.css","./**/*.js","./**/*.jpg","./**/*.png","./**/*.gif"];

var serverPort = "9999";

gulp.task('default', function() {
    bs1.init({
        proxy: {
            target: "http://domain-front:" + serverPort,
        },
        host: "zhpt-front",
        open: "external",
        port: 3010,
        ui: {
            port: 3011
        }
    });
    bs2.init({
        proxy: {
            target: "http://domain-admin:" + serverPort,
        },
        host: "zhpt-admin",
        open: "external",
        port: 3012,
        ui: {
            port: 3013
        }
    });
    gulp.watch(bs1WatchConfig).on('change', bs1.reload);
    gulp.watch(bs2WatchConfig).on('change', bs2.reload);

});
