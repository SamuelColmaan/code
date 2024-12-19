const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //compilação composta. O primeiro pacote é resposável por integrar o sass com o gulp (gulp-sass), mas quem vai fazer toda a compilação é o segundo pacote (sass). 
const sourcemaps = require('gulp-sourcemaps'); 
const uglify = require('gulp-uglify')

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}
// A execução da função compilaSass:
// O .src é para pegar o aquivo fonte;
// O pipe é para de fato compilar
function compilaSass(){
    return gulp.src('./source/styles/main.scss') // Colocar o caminho das pastas.
        .pipe(sourcemaps.init()) 
        .pipe(sass({
            outputStyle: 'compressed'
        }))//aqui dentro é chamando a variável que fez a requisição dos pacotes.
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles/')); // Colocar o caminho da pasta de destino da compilação
}

exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass))
}
exports.javascript = comprimeJavaScript