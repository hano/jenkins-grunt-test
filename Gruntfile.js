var pkgJson = require('./package.json');

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    	espresso: {
			options: {
				pathToApp: '<%= pkg.appName %>'
			}			
		}
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-espresso');

    // Default task(s).
    grunt.registerTask('default', ['espresso']);


};
