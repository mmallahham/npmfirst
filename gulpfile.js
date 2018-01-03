var gulp = require("gulp");
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel')

var jsfiles = ['*.js','src/**/*.js'];

gulp.task('default',function(){
    nodemon({
        script: 'buildScripts/srcServer.js',
        ext: 'js',
        env:{
            port:8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart',()=>{
        console.log('Server is restarting...');
    });
});


gulp.task('style',function(){
    gulp.src(jsfiles).pipe(jshint());
});