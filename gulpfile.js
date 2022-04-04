// 导入gulp的方法
const gulp = require('gulp')
// 导入压缩css的插件
const cssmin = require('gulp-cssmin')
// gulp.task('cssmin',function () {
//         return gulp
//         .src('./src/*.css')
//         .pipe(cssmin())
//         .pipe(gulp.dest('./dist/'))
//     }
// )
// 执行任务时，需要在终端切换到gulpfile.js所在的目录，运行gulp 任务名称 命令
// 执行完任务后，我们需要得到执行结果，我们可以用return来返回function中的任务，
// 或者给function指定一个形参，在任务执行完之后再执行形参的函数
// 如：
// gulp.task('cssmin',function (a) {
//     gulp
//     .src('./src/*.css')
//     .pipe(cssmin())
//     .pipe(gulp.dest('./dist/'))
//     a()
// })

// 以上为gulp3.0的写法，gulp4.0中可以这样写

// const cssminfun = function () {
//     return gulp
//     .src('./src/*.css')
//     .pipe(cssmin())
//     .pipe(gulp.dest('./dist/'))
// }

// function cssminfun () {
//     return gulp
//     .src('./src/*.css')
//     .pipe(cssmin())
//     .pipe(gulp.dest('./dist/'))
// }
// cssminfun();

// 任务执行完毕我们需要将任务执行结果导出
// module.exports.cssminfun = cssminfun
// 注意！！！此时函数名为cssminfun，在终端运行时，运行的是此函数名的任务
// 如：gulp cssminfun

// 导入转码的插件，此时说的转码是给css代码加上前缀，使css可以兼容多个浏览器
const autoprefixer = require('gulp-autoprefixer')
// function autoprefixerfun () {
//     return gulp
//     .src('./src/*.css')
//     .pipe(autoprefixer({ browsers: ['last 2 version'] }))
//     .pipe(cssmin())
//     .pipe(gulp.dest('./dist/'))
// }
// autoprefixerfun();
// module.exports.autoprefixerfun = autoprefixerfun

// autoprefixer方法可以指定浏览器版本，last 2 version表示最近两个版本的浏览器
// 可以看到，此时css代码已经被转码，压缩过了，但是终端却报错了，提示我们将autoprefixer方法中的last 2 version
// 替换到package.json这个文件中
function autoprefixerfun () {
    return gulp
    .src('./src/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/'))
}
autoprefixerfun();
module.exports.autoprefixerfun = autoprefixerfun
// 这样不但不会宝座，也不用再在autoprefixer这个方法中写了，在package.json中不但可以编辑浏览器版本，也可以适配移动端