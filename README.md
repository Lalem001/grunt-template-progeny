# grunt-template-progeny

> Grunt Template Helper: Progeny  
> Get style/template dependency paths

## Installation

```sh
$ npm install --save-dev grunt-template-progeny
```

**Note:** If you are using a task loader like `load-grunt-tasks` or `load-grunt-config`, no further setup is required.

```js
// Gruntfile.js
module.exports = function(grunt) {
	// require it and pass in the grunt instance.
	// config is optional
	require('grunt-template-progeny')(grunt, config);

	grunt.initConfig();
};
```

For more information about custom configuration see [Progeny's Documentation](https://github.com/es128/progeny#configuration).

## File Support

Progeny currently has support for `jade`, `stylus`, `less`, `sass`/`scss`, and `css` files.

## API Reference

### grunt.template.progeny(path) ⇒ <code>string</code>
**Returns**: <code>string</code> - glob ready list of paths  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Source path or grunt template |

## Usage

The following is a sample `grunt-contrib-watch` configuration.
It will watch the given source file and all of its dependencies.

```js
{
	less: {
		options: { reload:true }
		files: ['<%= grunt.template.progeny("path/to/source.less") %>']
		tasks: ['less']
	}
}
```

The following is a sample `gruntfile.js` configuration segment
You may also use template variables:

```js
// config
{
	less: {
		main: {
			src: "path/to/source.less",
			dest: "path/to/result.css"
		}
	},
	watch: {
		less: {
			options: { reload:true }
			files: ['<%= grunt.template.progeny(less.main.src) %>']
			tasks: ['less']
		}
	}
}
```

## License
MIT © [Luis Aleman](http://github.com/Lalem001)
