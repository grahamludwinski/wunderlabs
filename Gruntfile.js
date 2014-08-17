module.exports = function(grunt) {

  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	concat: {
	  js: {
		options: {
	  	  separator: ';'
	    },
	    dist: {
		  src: ['js/*.js'],
		  dest: 'js/concat.js'
	    }
	  },
	  css: {
		css: {
			src: 'css/*.css',
			dest: 'css/concat.css'
		}
	  }
	},
	
	min: {
	  js: {
	    src: 'js/concat.js',
	    dest: 'js/concat.min.js'
	  }
	},
	
	cssmin: {
	  css:{
	    src: 'css/concat.css',
	    dest: 'css/concat.min.css'
	  }
	},
	
	watch: {
	  css: {
	    files: ['css/*.css'],
	    tasks: ['concat css', 'cssmin']
	  },
	  js: {
	    files: ['js/*.js'],
	    tasks: ['concat js', 'min']
	  },
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('dev', ['watch']);

  grunt.registerTask('default', ['concat', 'min', 'cssmin']);

};