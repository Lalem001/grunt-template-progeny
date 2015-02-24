// grunt.loadNpmTasks will automatically load this file.
// Lend a helping hand and require the template helper.
module.exports = function (grunt) {
	require('..')(grunt);
	grunt.registerTask('grunt-template-progeny', 'Empty task', function () {
		grunt.log.error(this.name + ' is not intended to be used as a task.');
		grunt.log.error('See the documentation for example usage.');
		return true;
	});
};
