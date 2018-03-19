var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server',function(){
  connect.server({
    //设置服务器根目录
    root:'dist'
  })
})

gulp.task('copy-index',function(){
  //执行任务需要返回
  //gulp.src('index.html') 读取文件
  //gulp.src('index.html').pipe() 读取到文件之后进行处理
  //gulp.dest('dist') 将文件放到dist文件夹下面
  return gulp.src('index.html').pipe(gulp.dest('dist'))

})
// 复制文件夹中图片到指定图片文件夹
gulp.task('images',function(){
  return gulp.src('images/*.{png,jpg}').pipe(gulp.dest('dist/images'))
})
//复制不同文件夹下文件到指定文件夹中
gulp.task('copyall',function(){
  return gulp.src(['images/*','files/*','!file/.json']).pipe(gulp.dest('dist/data'))
})
// 指定需要依赖的任务 在该任务执行前会进行编译
gulp.task('resourse',['images','copyall'],function(){
  console.log('编译成功')
})

//编译指定文件夹中的sass文件
gulp.task('sass',function(){
  // gulp.src('stylesass/**/*.scss') 文件夹stylesass下所有sass文件
  return gulp.src('stylesass/**/*.scss')
  // 用sass进行编译 sass()
  .pipe(sass())
  // 编译完成之后输出到 dist/css文件夹下
  .pipe(gulp.dest('dist/css'))
})



gulp.task('watch',function(){
  // gulp.watch('index.html') 先指定要监视的文件
  gulp.watch('index.html',['当监视到文件改变时  需执行的任务'])
})

gulp.task('default',['copy-index'])