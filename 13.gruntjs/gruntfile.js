// module.exports vai receber uma função
// A função recebe um argumento que vai ser o próprio grunt
// Colocar dentro a função de configuração inicial
// Dentro das chaves estará o objeto de configuração
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function(){
            console.log('Olá, Grunt');
            done();
        },3000);
    })
    grunt.registerTask('default', ['olaGrunt'])
};