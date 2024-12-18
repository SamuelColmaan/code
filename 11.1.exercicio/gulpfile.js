const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //compilação composta. O primeiro pacote é resposável por integrar o sass com o gulp (gulp-sass), mas quem vai fazer toda a compilação é o segundo pacote (sass). 

// A execução da função compilaSass:
// O .src é para pegar o aquivo fonte;
// O pipe é para de fato compilar
function compilaSass(){
    return gulp.src('./source/styles/main.scss') // Colocar o caminho das pastas.
        .pipe(sass({
            outputStyle: 'compressed'
        }))//aqui dentro é chamando a variável que fez a requisição dos pacotes.
        .pipe(gulp.dest('./build/styles/')); // Colocar o caminho da pasta de destino da compilação
}

exports.sass = compilaSass;