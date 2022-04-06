// 引入gulp
const gulp = require('gulp')
const minHtml = require('gulp-minify-html') // 引入压缩html的插件
const autoprefixer = require('gulp-autoprefixer'); // 引入css前缀
const cleanCSS = require('gulp-clean-css'); // 引入压缩css插件
const stylus = require('gulp-stylus'); // 引入stylus编译插件
const babel = require('gulp-babel'); // 引入ES6转ES5插件
var uglify = require('gulp-uglify'); // 引入压缩JS插件
const connect = require('gulp-connect'); //引入浏览器自动刷新插件


// 开启的压缩html的任务
gulp.task('minhtml', function (cb) {
  gulp.src('./src/html/*.html') //需要压缩的html的路径地址
    .pipe(minHtml()) // 执行压缩插件
    .pipe(gulp.dest('./dist/html/'))
    .pipe(connect.reload())
  cb()
})

//监听任务： 监听你html、css、js、img发生改变时，需要做什么？     
gulp.task('watch', function (cb) {
  gulp.watch('./src/html/*.html', gulp.series('minhtml')) 
  gulp.watch('./src/stylus/*.*', gulp.series('stylus')) 
  gulp.watch('./src/js/*.js', gulp.series('es6')) 
  cb()
})

// 浏览器自动刷新
gulp.task('connect', function (cb) {
  connect.server({
    livereload: true,
  });
  cb()
});

// es6转ES5的任务
gulp.task('es6', () =>
  gulp.src('src/js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
  .pipe(connect.reload())
);

gulp.task('stylus', cb => {
  gulp.src('./src/stylus/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
  cb()
})

// 添加css前缀，再压缩
gulp.task('minifyCss', cb => {
  gulp.src('./src/css/*.css')
    .pipe(autoprefixer({}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
  cb()
})

// 开启默认任务，在这个任务中执行以上所以的任务
gulp.task('default', gulp.series('minhtml', 'stylus', 'es6', 'minifyCss', 'connect', 'watch'), cb => {
  cb()
})