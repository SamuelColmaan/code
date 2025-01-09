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
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true // booleano
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less' // distribution
                    // Vercel is going to read this folder
                }
            }
        },

       

   
    })

    grunt.loadNpmTasks('grunt-contrib-less'); // Chama o plugin do less

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);

};