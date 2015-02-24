/**
 * @license
 * grunt-template-progeny
 * Copyright 2014 Luis Aleman <https://github.com/Lalem001/>
 */
(function (module) {
	module.exports = function (grunt) {
		var progeny = require('progeny').Sync({rootPath: '.'});

		/**
		 * Facade to run Progeny on a specified path
		 * @param {string} path Source path (can be a grunt template)
		 * @returns {Array} Array of dependency paths
		 */
		function progenyFacade (path) {
			return progeny(grunt.template.process(path));
		}

		grunt.template.progeny = progenyFacade;
		return progenyFacade;
	};
})(module);
