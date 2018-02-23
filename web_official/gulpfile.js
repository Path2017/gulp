'use strict'

var gulp = require('gulp');
var config = require('./config.js');
var less = require('gulp-less');
// 压缩css文件
var minifyCSS = require('gulp-minify-css');
// 重命名
var rename = require('gulp-rename');
// 编译ES6
var babel = require('gulp-babel');
// 压缩js
var uglify = require('gulp-uglify');
// 启动本地服务器
var connect = require('gulp-connect');

// 编译less成css 并且压缩
gulp.task('less', function () {
  gulp.src('./src/css/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.css.dest))
    .pipe(connect.reload())
})
// 压缩css
gulp.task('minifyCss', function () {
  gulp.src('./src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.css.dest))
    .pipe(connect.reload())
})
// 编译ES6 到 ES5
gulp.task('babel', function () {
  gulp.src('./src/js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
    .pipe(connect.reload())
})
// 转存js 
gulp.task('minifyjs',function(){
  gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
  .pipe(connect.reload())
})
// 转存html 
gulp.task('html',function(){
  gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload())
})
// 转存img
gulp.task('img',function(){
  gulp.src('./src/images/**/*')
  .pipe(gulp.dest('./dist/images'))
  .pipe(connect.reload())
})
// 转存插件
gulp.task('vendor',function(){
  gulp.src('./src/vendor/**/*')
  .pipe(gulp.dest('./dist/vendor'))
  .pipe(connect.reload())
})
// 监听
gulp.task('watch',function(){
  gulp.watch('./src/*.html',['html'])
  gulp.watch('./src/css/*.less',['less'])
  gulp.watch('./src/css/*.css',['minifyCss'])
  gulp.watch('./src/css/layout1440.css',['minifyCss'])
  gulp.watch('./src/js/*.js',['minifyjs'])
  gulp.watch('./src/images/**/*',['img'])
  gulp.watch('./src/vendor/**/*',['vendor'])
})
// 开启本地服务器
gulp.task('server',function(){
  connect.server({
    // 设置根目录
    root:'./dist',
    port:8090,
    // 启动实时刷新
    livereload:true
  })
});
// 添加默认任务
gulp.task('default',['html','watch','server']);