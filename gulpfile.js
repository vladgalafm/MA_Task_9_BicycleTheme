var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var browserSync = require("browser-sync");
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");

gulp.task('sass', function(){
  gulp.src('app/scss/main.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
      browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'browser'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('browser', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('default', ['watch']);

/*
npm install node-sass gulp-sass --save-dev
npm install --save-dev gulp-watch
npm install --save-dev gulp-rename
npm install browser-sync gulp --save-dev
npm install --save-dev gulp-plumber
npm install --save-dev gulp-autoprefixer
 */