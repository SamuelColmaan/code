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
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'css_adress',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'js_adress',
                            replacement: './scripts/main..minjs'
                        }
                    ]
                },
                files: [
                    {
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist/'
                    }
                ]
            },
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'css_adress',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'js_adress',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'], // Development source
                        dest: 'dev/' // Development destination
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    // God is reaaaaaal
                    collapseWhitespace: true
                    // White space will be deleted
                },
                // First, the code will be minified, and then it will be replaced
                files: {'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
            uglify: {
                target: {
                    files: {
                        'dist/scripts/main.min.js': 'src/scripts/main.js'
                    }
                }
            }
        

       

   
    })

    grunt.loadNpmTasks('grunt-contrib-less'); // Chama o plugin do less
    grunt.loadNpmTasks('grunt-contrib-watch'); // It calls the grunt contrib watcher plugin
    grunt.loadNpmTasks('grunt-replace'); // It calls the grunt-replace plugin
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); // It calls the grunt-contrib HTML min
    grunt.loadNpmTasks('grunt-contrib-clean'); // It calls the grunt-contrib-clean
    grunt.loadNpmTasks('grunt-contrib-uglify'); // It calls thr grunt-contrib-uglify


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production' , 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);

};