# grunt-template-progeny

> Grunt template helper to recursively find dependencies of style and template files.

## Installation

```sh
$ npm install --save-dev grunt-template-progeny
```

**Note:** If you are using a task loader like `load-grunt-tasks` or `load-grunt-config`, no further setup is required.

```js
// Gruntfile.js
module.exports = function(grunt) {
	// require it and pass in the grunt instance
	require('grunt-template-progeny')(grunt);

	grunt.initConfig();
};
```

## File Support

Progeny currently has support for `jade`, `stylus`, `less`, `sass`/`scss`, and `css`. 

## API Reference

### grunt.template.progeny(path)

**Params**

- path `string` - Path to source file

**Returns**

- String[] - Paths to dependencies
  - **Note**: When used in a template, the array will joined into a comma separated list.

## Usage

The following is a sample `grunt-contrib-watch` configuration.
It will watch the given source file and all of its dependencies.

```js
{
	less: {
		options: { reload:true }
		files: ['path/to/source.less', '{<%= grunt.template.progeny("path/to/source.less") %>}']
		tasks: ['less']
	}
}
```

> **Important Note**:  
The braces surrounding the template delimiters `<% %>` are required here.
They allow glob to understand the comma delimited list of files that progeny returns.
See [Globbing patterns](http://gruntjs.com/configuring-tasks#globbing-patterns).
