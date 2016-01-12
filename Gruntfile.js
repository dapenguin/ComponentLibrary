/**
 * Takes a task name and an alias, and returns a string for running that
 * combination.
 * @param  {String} task  Name of the task to run.
 * @param  {String} alias Alias of the specified task we want to run.
 * @return {String}       The string for running the specified combination.
 */
var getTask = function(task,alias){
    if (alias) {
        task += ':' + alias;
    }
    return task;
};

module.exports = function(grunt){
    //var autoprefixer = require('autoprefixer-core');

    require("time-grunt")(grunt);

    grunt.initConfig({
        concurrent: {
            tasks: ['devNodemon','devWatch'],
            options: {
                logConcurrentOutput: true
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
    		dev: {
			    files: {
                    'app/public/css/componentLibrary.css':'src/default/componentLibrary.scss',
                    'app/public/css/style.css':'src/default/style.scss'
			    }
		    }
    	},
        /*postcss: {
            options: {
                processors: [
                    autoprefixer(
                        {
                            browsers: [
                                'last 20 versions',
                                'ie >= 9'
                            ]
                        }
                    ).postcss
                ]
            },
            dev: {
                files: {
                    'css/main.css':'css/main.css'
                }
            }
        },
    	cssmin: {
    		dev: {
	    		options: {
					//aggressiveMerging: true,
					keepBreaks: true,
					debug: true,
                    compatibility: {
                        properties: {
                            spaceAfterClosingBrace: true,
                            ieSuffixHack: true
                        }
                    }
	    		},
    			files: {
    				'css/main.min.css':['css/main.css'],
    				'css/main-ie8.min.css':['css/main-ie8.css']
	    		}
	    	}
    	},*/
        bytesize: {
            all: {
                src: [
                    'css/*.css'
                ]
            }
        },
    	watch: {
    		css: {
	    		files: ['src/*.scss','src/**/*.scss'],
	    		tasks: ['buildCss']
            }
    	}
    });

    grunt.registerTask('buildCss', [], function(){
        grunt.loadNpmTasks('grunt-sass');
        //grunt.loadNpmTasks('grunt-bytesize');
        //grunt.loadNpmTasks('grunt-contrib-cssmin');
        //grunt.loadNpmTasks('grunt-postcss');
        grunt.task.run('sass:dev');
        //grunt.task.run('postcss');
        //grunt.task.run('cssmin:dev');
        //grunt.task.run('bytesize');
    });

    grunt.registerTask('serve', [], function(){
        grunt.loadNpmTasks('grunt-http-server');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.task.run('http-server');
        grunt.task.run('watch');
    });

    grunt.registerTask('devNodemon', [], function(alias){
        var nodemonTask = getTask('nodemon',alias);

        grunt.loadNpmTasks('grunt-nodemon');
        grunt.task.run(nodemonTask);
    });
    
    grunt.registerTask('devWatch', [], function(){
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.task.run('watch');
    });

    grunt.registerTask('dev', [], function(){
        grunt.loadNpmTasks('grunt-concurrent');
        grunt.task.run('concurrent');
    });

    grunt.registerTask('default', []);
};
