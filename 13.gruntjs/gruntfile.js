// module.exports vai receber uma função
// A função recebe um argumento que vai ser o próprio grunt
// Colocar dentro a função de configuração inicial
// Dentro das chaves estará o objeto de configuração
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Podemos criar ambientes diferentes a partir de onde o grunt é executado;
        // Neste caso chama-se development. Ele é o ambiente padrão;
        // Podemos criar outros, como, por exemplo o ambiente final de produção (Vercel, por exemplo)
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true // booleano
                },
                files: {
                    'main.min.css': 'main.less' // min de minificado (Versão de produção)
                }
            }
        },

        // A configuração do sass é um pouco diferente da do less
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                }, 
                files: {
                    'main2.css': 'main.scss' // O main2.css é apenas para um arquivo não reescrever sobre o outro
                }
            }
        }
    });

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function(){
            console.log('Olá, Grunt');
            done();
        },3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less'); // Chama o plugin do less
    grunt.loadNpmTasks('grunt-contrib-sass'); // Chama o plugin do sass

    grunt.registerTask('default', ['less', 'sass']);
};