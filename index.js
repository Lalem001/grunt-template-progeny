/**
 * @license
 * grunt-template-progeny
 * Copyright 2014 Luis Aleman <https://github.com/Lalem001/>
 */
(function (module) {
	module.exports = function (grunt, config) {
		var progeny = require('progeny').Sync(config);

		/**
		 * Grunt Template Helper: Progeny
		 * Get the dependencies of the specified path in a glob ready list of paths
		 *
		 * @function "grunt.template.progeny"
		 * @param {string} path Source path or grunt template
		 * @returns {string} glob ready list of paths
		 * @example
		 * ```js
		 * {
		 *   src: '<%= grunt.template.progeny("path/to/source.less") %>'
		 * }
		 * ```
		 * @example
		 * ```js
		 * {
		 *   // using source path from another task
		 *   src: '<%= grunt.template.progeny(less.main.src) %>'
		 * }
		 * ```
		 */
		grunt.template.progeny = function (path) {
			path = grunt.template.process(path);
			return '{' + progeny(path) + ',}';
		};

		return grunt.template.progeny;
	};
})(module);
