const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log('Executando via gulp');
        callback();
    }, 2000)

}

function sayHi (callback) {
    console.log('Hi, gulp!');
    sayBye()
    callback();
}

function sayBye() {
    console.log('bye, Gulp')
} 

exports.default = gulp.series(funcaoPadrao, sayHi) // executando em série
exports.sass = compilaSass
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}

//exports.default = gulp.parallel(funcaoPadrao, sayHi) // executando em paralelo


/* exports.default = funcaoPadrao;
exports.sayHi = sayHi */

//Tarefas públicas são as que exportamos 
// Tarefas privadas são as que não exportamos, mas podemos usar dentro de outras tarefas