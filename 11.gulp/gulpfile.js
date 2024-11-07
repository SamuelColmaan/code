const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'))

function funcaoPadrao(callback){
    setTimeout(function() {
        console.log('Executando via gulp');
        callback();
    }, 2000)
}

function dizOi(callback) {
    setTimeout(function(){
        console.log('Hello, world')
        dizTchau()
        callback()
    }, 5000)
}

function dizTchau(){
    console.log('Tchau gulp')
}
/* Em série basta eu rodar  exports.default = gulp.series(funcaoPadrao, dizOi);
*/
/* Em paralelo basta rodar em parallel */
exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;

/* Na hora de chamar a tarefa default não precisa especificar. Pode colocar no terminal: npm run gulp */
/* Mas a tarefa que não é default precisa ser chamada com o nome dela no terminal. Por exemplo: npm run gulp dizOi */