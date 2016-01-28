/**
 * Takes a task name and an alias, and returns a string for running that
 * combination.
 * @param  {String} task  Name of the task to run.
 * @param  {String} alias Alias of the specified task we want to run.
 * @return {String}       The string for running the specified combination.
 */
var getTask = function(task,alias){
    if (!alias) {
        alias = 'default';
    }
    task += ':' + alias;

    return task;
};

module.exports = function(grunt){
    require("time-grunt")(grunt);

    grunt.initConfig({
        concurrent: {
            default: {
                tasks: ['devNodemon:default','devWatch:defaultCss'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        nodemon: {
            default: {
                script: './app/bin/www',
                options: {
                    ext: 'js,hbs',
                    watch: ['app','src']
                }
            },
            second: {
                script: './app/bin/www second',
                options: {
                    ext: 'js,hbs',
                    watch: ['app','src']
                }
            }
        },
        sass: {
	    	options: {
		    	outputStyle: 'nested'
		    },
    		default: {
			    files: {
                    'app/public/css/componentLibrary.css':'src/default/sass/componentLibrary.scss',
                    'app/public/css/style.css':'src/default/sass/style.scss'
			    }
		    }
    	},
        bytesize: {
            all: {
                src: [
                    'css/*.css'
                ]
            }
        },
    	watch: {
            defaultCss: {
        		files: ['src/default/*.scss','src/default/**/*.scss'],
        		tasks: ['buildCss:default']
            }
    	}
    });

    grunt.registerTask('buildCss', [], function(){
        grunt.loadNpmTasks('grunt-sass');
        grunt.task.run('sass:default');
    });

    grunt.registerTask('devNodemon', [], function(alias){
        var nodemonTask = getTask('nodemon',alias);

        grunt.loadNpmTasks('grunt-nodemon');
        grunt.task.run(nodemonTask);
    });
    
    grunt.registerTask('devWatch', [], function(alias){
        var watchTask = getTask('watch',alias);

        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.task.run(watchTask);
    });

    grunt.registerTask('dev', [], function(alias){
        var devTask = getTask('concurrent',alias);

        grunt.loadNpmTasks('grunt-concurrent');
        grunt.task.run(devTask);
    });

    grunt.registerTask('default', []);
};
