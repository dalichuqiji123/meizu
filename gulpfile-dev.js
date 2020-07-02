const {task,src,dest,watch,series,parallel}=require('gulp')
const load=require('gulp-load-plugins')()
const del=require('del')
//删除dist
task('del',async()=>{
    await del('./dist')
})
//处理html
task('html', async()=>{
    src('./src/html/*.html')
    .pipe(dest('./dist/html'))
    .pipe(load.connect.reload())//刷新
})
//处理img
task('img' ,async()=>{
    src('./src/img/*.*')
    .pipe(dest('./dist/img'))
    .pipe(load.connect.reload())
})
task('icon' ,async()=>{
    src('./src/sass/icon/*.*')
    .pipe(dest('./dist/css/icon'))
    .pipe(load.connect.reload())
})
//处理script
task('script',async()=>{
    src('./src/script/*.js')
    .pipe(dest('./dist/script'))
    .pipe(load.connect.reload())
})
//处理php
task('php',async()=>{
    src('./src/php/*.php')
    .pipe(dest('./dist/php'))
    .pipe(load.connect.reload())
})
//编译sass
task('sass',async()=>{
    src('./src/sass/*.scss')
    .pipe(load.sassChina())
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())
})

//web服务器
task('connect',async()=>{
    load.connect.server({
        root: './dist',
        livereload: true,
        port: 3000
    })
})
//监听
task('watch',async()=>{
    watch('./src/html/*.html',series('html'))
    watch('./src/script/*.js',series('script'))
    watch('./src/img/*.*',series('img'))
    watch('./src/sass/*.scss',series('sass'))
    watch('./src/php/*.php',series('php'))
})
//监听并且启动服务器
task('dev',series('del','html','script','img','php','icon','sass','watch','connect'))