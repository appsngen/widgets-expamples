module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        meta: {
            src: "src",
            out: "dist",
            widgetName: grunt.file.readJSON('package.json').name
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
                    'application.xml',
                    'index.html',
                ],
                dest: '<%= meta.out %>/<%= meta.widgetName %>',
                cwd: '<%= meta.src %>'
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
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task.
    grunt.registerTask('default', [
        'clean:beforebuild',
        'copy:src',
        'compress',
        'clean:afterbuild'
    ]);
};
