// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function (grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt
    grunt.initConfig({

        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["build/html"], // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },

        // grunt-watch will monitor the projects files
        watch: {
            all: {
                // Replace with whatever file you want to trigger the update from
                // Either as a String for a single entry
                // or an Array of String for multiple entries
                // You can use globing patterns like `css/**/*.css`
                // See https://github.com/gruntjs/grunt-contrib-watch#files
                files: 'source/*',
                tasks: ['build'],
                options: {
                    livereload: true
                }
            },
            index: {
                // Replace with whatever file you want to trigger the update from
                // Either as a String for a single entry
                // or an Array of String for multiple entries
                // You can use globing patterns like `css/**/*.css`
                // See https://github.com/gruntjs/grunt-contrib-watch#files
                files: 'source/index.rst',
                tasks: ['build_all'],
                options: {
                    livereload: true
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },

        exec: {
            build_sphinx: {
                cmd: 'sphinx-build -b html source build/html'
            },
            build_all: {
                cmd: 'sphinx-build -a source build/html'
            }
        },
        clean: {
            build: ["build/html"]
            //fonts: ["sphinx_rtd_theme/static/fonts"]
        }
    });


    // Creates the `server` task
    grunt.registerTask('default', ['express', 'open', 'watch']);
    grunt.registerTask('build', ['exec:build_sphinx']);
    grunt.registerTask('build_all', ['exec:build_all']);
};
