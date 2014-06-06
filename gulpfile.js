// Include gulp
var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");

// Basic usage
gulp.task("browserify", function() {
    // Single entry point to browserify
    gulp.src("./public/js/main.js")
        .pipe(browserify({
          //basedir: "./",
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest("./public/js"));
});

// Nodemon Dev Task
gulp.task("develop", function () {
  nodemon({
    script: "app.js",
    ext: "js",
    ignore: ["ignored.js"],
    env: { "NODE_ENV": "development" }
  })
  .on("error", "develop");
  //.on("restart", ["browserify"]);
});
