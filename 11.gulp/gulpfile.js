const gulp = require ('gulp');

function funcaoPadrao(callback){
    console.log('Teste de gulp');
    callback();
}

function dizOi(callback) {
    console.log('Hello, world')
    dizTchau()
    callback()
}

function dizTchau(){
    console.log('Tchau gulp')
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;

/* Na hora de chamar a tarefa default não precisa especificar. Pode colocar no terminal: npm run gulp */
/* Mas a tarefa que não é default precisa ser chamada com o nome dela no terminal. Por exemplo: npm run gulp dizOi */