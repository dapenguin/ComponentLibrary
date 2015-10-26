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
            dev: {
                script: './bin/www',
                options: {
                    watch: ['bin','data','lib','helpers','routes','views','app.js']
                }
            }
        },
        sass: {
	    	options: {
		    	outputStyle: 'nested'
		    },
    		dev: {
			    files: {
                    'public/css/componentLibrary.css':'sass/componentLibrary.scss',
                    'public/css/style.css':'sass/style.scss'
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
	    		files: ['sass/*.scss','sass/**/*.scss'],
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

    grunt.registerTask('devNodemon', [], function(){
        grunt.loadNpmTasks('grunt-nodemon');
        grunt.task.run('nodemon');
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
