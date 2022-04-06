// 导入gulp的方法
const gulp = require('gulp')
// 导入压缩css的插件
const cssmin = require('gulp-cssmin')
const fileIclude = require('gulp-file-include')
// gulp.task('cssmin',function () {
//             return gulp
//             .src('./src/*.css')
//             .pipe(cssmin())
//             .pipe(gulp.dest('./dist/css/'))
//         }
//     )
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
    
    function cssminfun () {
            return gulp
            .src('./src/*.css')
            .pipe(cssmin())
            .pipe(gulp.dest('./dist/'))
        }
        cssminfun();
        
        // 任务执行完毕我们需要将任务执行结果导出
        module.exports.cssminfun = cssminfun
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
        .pipe(gulp.dest('./dist/css/'))
    }
    autoprefixerfun();
    module.exports.autoprefixerfun = autoprefixerfun
    // 这样不但不会宝座，也不用再在autoprefixer这个方法中写了，在package.json中不但可以编辑浏览器版本，也可以适配移动端
    
    // sass
    // 下载sass这个插件的时候最好使用淘宝镜像，不然很容易下载不成功
    // 原因：gulp-sass需要依赖一个node-sass的文件，以前这两个文件在同一个地址下载，但是后来分开了
    // 所以，直接下载gulp-sass时会自动先下载node-sass，之后再下载gulp-sass
    const sass = require('gulp-sass')(require('sass'))
    
    const sassfun = async function () {
        return gulp
        .src('./src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'))
    }
    module.exports.sassfun = sassfun
    // 注意！！！在使用gulp4.0方法处理sass文件时，引入gulp-sass时的代码需要这样写
    // ：const sass = require('gulp-sass')(require('sass'))

    // sass
    // 使用sass时，我们可以再sass文件中定义好变量，然后将sass文件引入scss文件中，在scss文件中使用sass变量
    // 在编辑sass文件时，变量之间不需要加分号，这很重要！！。。

    const uglify = require('gulp-uglify')
    const uglifyfun = ()=>{
        return gulp
        .src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
    }
    module.exports.uglifyfun = uglifyfun

    // 注意！！！用gulp-uglify插件直接压缩js时，js中不能有ES6语法
    // 所以在用gulp-uglify插件压缩js文件之前，我们需要把ES6语法转换为ES5语法


    // ES语法转ES5语法插件：gulp-babel
    // gulp-babel有两个版本：gulp-babel@7(多用于gulp3.0版本)  和  gulp-babel@8(多用于gulp4.0版本)
    // gulp-babel需要依赖两个包：@babel/core   @babel/preset-env
    // 下载gulp-babel后别忘了下载另外两个包
    // 使用banel插件需要指定参数

    const babel = require('gulp-babel')
    const babelfun = ()=>{
        return gulp
        .src('./src/*.js')
        .pipe(babel({
            // babel@7  presets:['es2015]
            presets:['@babel/env']
        }))
        .pipe(gulp.dest('./dist/js/'))
    }
    module.exports.babelfun = babelfun

    // gulp-htmlmin插件用来压缩html
    // 他需要通过配置参数来进行压缩
    const htmlmin = require('gulp-htmlmin')
    const htmlminfun = ()=>{
        return gulp
        .src('./src/*.html')
        .pipe(fileIclude({
            // 根据你的配置导入指定的html片段
            // 你自定义的标识符
            prefix: '$-$',
            // 组件的目录
            basepath: './zujian',
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,  //移除空格和换行
            removeEmptyAttributes: true, //移除空属性
            collapseBooleanAttributes: true,// 移除类似 checked 的布尔值属性 
            removeAttributeQuotes: true,//移除属性上的双引号
            minifyCSS: true,//压缩内嵌式css (只能基本压缩，不能添加前缀)
            minifyJS: true,//压缩内嵌式js (只能基本压缩，不能ES6转ES5)
            removeStyleLinkTypeAttributes: true,//移除link标签上默认的type属性
            removeScriptTypeAttributes: true,//移除script标签上默认的type属性
        }))
        .pipe(gulp.dest('./dist/html/'))
    }
    module.exports.htmlminfun = htmlminfun

    // 压缩图片的插件gulp-imagemin
    // 压缩视频和音频
    // 压缩第三方
    //这几个了解一下就行

    // 以上方法的返回只是一个流
    // 以上任务都写好之后创建一个默认任务直接执行上面的所有任务
    //同步执行：gulp.series()   异步执行：gulp.parallel()
    // 同步和异步函数的返回值是一个函数
    // 创建默认人物的方式：
    // 1.gulp.task('default',()=>{})
    // 2.module.exports.default = () => {}
    // 如：
    // module.exports.default = gulp.parallel(
    //         autoprefixerfun,
    //         sassfun,
    //         uglifyfun,
    //         babelfun,
    //         htmlminfun
    //     )

    // 为什么默认任务一定要叫default？
    // 其实其他名字也可以
    // 但是当你有一个任务名称叫default时，在终端中就不需要再写gulp 任务名了
    // 可以直接写gulp
    // gulp会默认执行名叫default的任务


    // 我们在压缩文件的时候，压缩完后可能会忘了重命名，这时重命名过后的文件就需要再压缩一次
    // 但这时gulp不会直接覆盖之前压缩的css文件，而是重新创建一个css文件添加进去
    // 所以，我们需要将之前压缩的css文件删除
    // del插件可以做到
    const del = require('del')
    const delfun = (cb)=>{
        del.sync(['./dist/'])
        cb()
    }
    module.exports.delfun = delfun

    // module.exports.default = gulp.series(
    //     delfun,
    //     autoprefixerfun,
    //     sassfun,
    //     uglifyfun,
    //     babelfun,
    //     htmlminfun
    // )
    
    // 在我们以后的开发中会经常用到sass,less或者stylus
    // 但是他们所对应的文件无法被浏览器解析
    // 所以我们需要在开发时经常用gulp打包文件，将以上类型的文件转换成css文件，再执行
    // 又因为我们的页面终究是要在服务器上运行的，
    // 所以我们需要用gulp来配置一个服务器端
    // 在配置web服务之前别忘了把src中的引用路径改成dist中的相对路径
    const webserver = require('gulp-webserver')
    const webfun =  ()=> {
        return gulp
        .src('./dist')
        .pipe(webserver({
            //域名(可自定义)
            host: 'www.wlz.com',  
            directoryListing:true,
            //端口号
            port: 2222,   
            //当文件修改时，是否自动刷新
            livereload: true,   
            //默认打开哪一个文件(从dist目录以后的目录开始书写)
            open: '/html/index.html', 
            // gulp-webserver配置代理
            // 注意！！！如果你没有代理，不要写空对象！！
            proxies: [
                {
                    // 代理标识符
                    source: '/dt',
                    // 代理目标地址
                    target: 'https://fanyi.baidu.com/mtpe/user/getInfo?_=1649235558573'
                }
            ]
        }))
    }
    // 在gulp打包完文件后开始启动服务端
    // module.exports.default = gulp.series(
    //     delfun,
    //     gulp.parallel(
    //         autoprefixerfun,
    //         sassfun,
    //         babelfun,
    //         uglifyfun,
    //         htmlminfun,
    //         cssminfun,
    //     ),
    //     webfun
    // )

    // 这时你会发现，我们虽然在webserver中设置了自动刷新
    // 但是我们在src中修改文件页面并没有变化，原因是我们没有将src目录和dist目录连接起来


    // 如何自定义域名呢？
    // 在C盘中找到C:\Windows\System32\drivers\etc
    // 中的hosts文件
    // 注意！！！找没有后缀名的那个
    // 打开hosts文件，添加127.0.0.1 www.wlz.com


    //代理
    // 如果你想使用代理，那么必须   要在gulp-webserver启动的服务器上运行页面
    //否则会产生跨域问题
    //如果你代理的是一个目录结构，那么此目录下的文件你都能请求到 

    
    // 创建一个监控任务
    const watch = function () {
        // 第一个参数为修改的文件，第二个参数为修改完文件后执行的操作
        gulp.watch('./src/*.html',htmlminfun)
        gulp.watch('./src/*.scss',sassfun)
        gulp.watch('./src/*.css',cssminfun)
        gulp.watch('./src/*.js',uglifyfun)
    }
    module.exports.watch = watch
    //此时，执行watch任务会在终端出现以一个Starting 'watch'...
    // 此时每保存一次，watch就会监控过一次./dist/css/*.css文件
    // 如果./dist/css/*.css被改变了，那么watch就会重新执行一次

    // 添加监控任务的default
    // module.exports.default = gulp.series(
    //     delfun,
    //     gulp.parallel(
    //         autoprefixerfun,
    //         sassfun,
    //         babelfun,
    //         uglifyfun,
    //         htmlminfun,
    //         cssminfun,
    //     ),
    //     watch,
    //     webfun
    // )
    // 此时你修改了文件保存后他就会自动刷新
    // 但是要注意一点：他刷新总比你要慢一拍，所以如果你修改后的效果没有出现
    // 那么你可以试试再保存一次


    // 组件
    // const fileIclude = require('gulp-file-include')
    // 它同样是一个流函数
    const fileIcludefun = function () {
        return gulp
        .src('./src/*.html')
        .pipe(fileIclude({
            // 根据你的配置导入指定的html片段
            // 你自定义的标识符
            prefix: '$-$',
            // 组件的目录
            basepath: './zujian/',
        }))
        .pipe(gulp.dest('./dist/html/'))
    }
    module.exports.fileIcludefun = fileIcludefun
    // html文件中的用法在src/index.html里

    // 加入了组件的default任务
    module.exports.default = gulp.series(
        delfun,
        gulp.parallel(
            autoprefixerfun,
            sassfun,
            babelfun,
            uglifyfun,
            htmlminfun,
            cssminfun,
        ),
        watch,
        webfun
    )