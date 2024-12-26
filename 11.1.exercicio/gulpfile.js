const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require ('gulp-obfuscate'); //tornar um arquivo ilegível
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./buld/images'))
}
function comprimeJavaScript() {
    return gulp.src ('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
} 

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.sass = compilaSass
exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));

}

//exports.default = gulp.parallel(funcaoPadrao, sayHi) // executando em paralelo


/* exports.default = funcaoPadrao;
exports.sayHi = sayHi */

//Tarefas públicas são as que exportamos 
// Tarefas privadas são as que não exportamos, mas podemos usar dentro de outras tarefas