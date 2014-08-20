module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        meta: {
            src: "src",
            out: ".out",
            widgetName: grunt.file.readJSON('package.json').name
        },
        bower: {
            install: {
                options: {
                    targetDir: '<%= meta.src %>/js/dependencies',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: true,
                    bowerOptions: {}
                }
            }
        },
        /* cleans output folder  */
        clean: {
            beforebuild: ['<%= meta.out %>/<%= meta.widgetName %>', '<%= meta.out %>/<%= meta.widgetName %>.zip'],
            afterbuild: ['<%= meta.out %>/<%= meta.widgetName %>']
        },
        /* copies files which are used by widget 'as is' */
        copy: {
            src: {
                expand: true,
                src: [
                    'application.xml'
                ],
                dest: '<%= meta.out %>/<%= meta.widgetName %>',
                cwd: '<%= meta.src %>'
            }
        },
        /* concatenates css and js files */
        concat: {
            js: {
                src: [
                    '<%= meta.src %>/js/dependencies/jquery/jquery.js',
                    '<%= meta.src %>/js/widget.js'
                ],
                dest: '<%= meta.out %>/<%= meta.widgetName %>/js/widget.concat.js'
            }
        },
        htmlrefs: {
            build: {
                src: '<%= meta.src %>/index.html',
                dest: '<%= meta.out %>/<%= meta.widgetName %>'
            }
        },
        compress: {
            zip: {
                options: { archive: '<%= meta.out %>/<%= meta.widgetName %>.zip' },
                files: [
                    { expand: true, src: ['**/*'], cwd: '<%= meta.out %>/<%= meta.widgetName %>' }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-htmlrefs');
    grunt.loadNpmTasks('grunt-bower-task');

    // Default task
    grunt.registerTask('default', [
        'clean:beforebuild',
        'copy:src',
        'concat:js',
        'htmlrefs',
        'compress',
        'clean:afterbuild'
    ]);

};
