var gulp = require("gulp");
var sass = require("gulp-sass");//编译sass
var concat = require("gulp-concat");//合并文件
var uglify = require("gulp-uglify");//压缩文件
var rename = require("gulp-rename");//重起名
var minfyCSS = require("gulp-minify-css");//压缩css
var imagemin = require("gulp-imagemin");//压缩图片


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能

//复制
gulp.task("copyHTML",function(){
    gulp.src("*.html").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd"));
});

gulp.task("copyFILE",function(){
    gulp.src("*/**/*").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd"));
});

gulp.task("copyCSS",function(){
    gulp.src("css/**/*").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd\\css"));
});

gulp.task("copyJS",function(){
    gulp.src("js/**/*").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd\\js"));
});

gulp.task("copyIMG",function(){
    gulp.src("img/**/*").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd\\img"));
});

gulp.task("copyJSON",function(){
    gulp.src("json/**/*").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd\\json"));
});

gulp.task("copySASS",function(){
    gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd\\css"));
});

gulp.task("copyPHP",function(){
    gulp.src("PHP/*.php").pipe(gulp.dest("E:\\phpStudy\\PHPTutorial\\WWW\\yhd\\php"));
});

gulp.task("build",["copyHTML","copyCSS","copyJS","copyJSON","copyIMG"],function(){
    console.log('ok');
});



//监听
// gulp.task("watchHTML",function(){
//     //一旦index.html发生改变，就立即执行copyHTML;
//     gulp.watch("index.html",["copyHTML"]);
// });

gulp.task("watchAll",function(){
    //一旦index.html发生改变，就立即执行copyHTML;
    gulp.watch("*.html",["copyHTML"]);
    gulp.watch("css/**/*",["copyCSS"]);
    gulp.watch("js/**/*",["copyJS"]);
    gulp.watch("img/**/*",["copyIMG"]);
    gulp.watch("json/**/*",["copyJSON"]);
    gulp.watch("sass/**/*",["copySASS"]);
    gulp.watch("php/*.php",["copyPHP"])
});


