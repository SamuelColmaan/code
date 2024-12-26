const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //compilação composta. O primeiro pacote é resposável por integrar o sass com o gulp (gulp-sass), mas quem vai fazer toda a compilação é o segundo pacote (sass). 
const sourcemaps = require('gulp-sourcemaps'); // Vai mostrar para o navegador ao invés do local final onde se encontra a linha do style css, o local intermediário na linha correta.
const uglify = require('gulp-uglify'); // Faz a importação do pacote que vai comprimir o JavaScript
const obfuscate = require('gulp-obfuscate'); // Faz a importação do pacote que vai ofuscar o JavaScript
const imagemin = require('gulp-imagemin'); // Faz a importação do pacote que vai comprimir as imagens

function comprimeImagem() {
    return gulp.src('./source/images/*') // É importante não colocar a extensão do arquivo pois são varios formatos de imagem (png, jpeg...)
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify()) // Comprime o JavaScript
    .pipe(obfuscate()) // Ofusca o JavaScript
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

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false }, gulp.series(comprimeImagem));
}
