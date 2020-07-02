const {task,dest,src,parallel,series,watch}=require('gulp')
const load=require('gulp-load-plugins')()
const del=require('del')
//删除dist目录
async function delDist(){
    await del('./dist')
}
//处理img
async function img(){
    src('./src/img/*.*')
    .pipe(dest('./dist/img'))
}
//处理 PHP 
async function php(){
    src('./src/php/*.php')
    .pipe(dest('./dist/php'))
}
//处理 script(转成ES5，并且压缩)
async function script(){
    src('./src/script/*.js')
    .pipe(load.babel({ presets: ['@babel/preset-env']}))//转成ES5
    .pipe(load.uglify())//压缩
    .pipe(load.rev())//添加希哈值
    .pipe(dest('./dist/script'))
    .pipe(load.rev.manifest())//生成记录版本号的json文件
    .pipe(dest('./rev/js'))
}
//处理sass
async function sass(){
    src('./src/sass/*.scss')
    .pipe(load.sassChina())//转成css
    .pipe(load.minifyCss())//压缩
    .pipe(load.rev())//给文件名后面添加哈希值
    .pipe(dest('./dist/css'))
    .pipe(load.rev.manifest())//生成记录版本号的json文件
    .pipe(dest('./rev/css'))
}
//处理html
async function html (){
    return new Promise((resovle,reject)=>{
        setTimeout(()=>{//延后执行这个任务
            resovle();
            src(['./rev/**/*.json','./src/html/*.html'])
            .pipe(load.revCollector({
                replaceReved: true //根据之前生成的json配置，替换原来路径为哈希路径
            }))
            .pipe(load.minifyHtml())//压缩
            .pipe(dest('./dist/html'))
        },2000);
    })
}

task('build',async()=>{
    await delDist()
    await img()
    await php()
    await script()
    await sass()
    await html()
})