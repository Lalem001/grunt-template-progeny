describe('grunt-template-progeny', function () {
	var path, grunt, progeny, fixturePaths, configData;

	path = require('path');
	fixturePaths = {
		a: path.resolve('spec/fixtures/a.less'),
		b: path.resolve('spec/fixtures/b.less'),
		c: path.resolve('spec/fixtures/c.less')
	};

	beforeEach(function () {
		grunt  = require('grunt');
		progeny = require('..')(grunt);

		configData = grunt.config.data;
		configData.path = fixturePaths.a;
	});

	it('should add progeny helper to grunt.template.progeny', function () {
		var reference = grunt.template.progeny;
		expect(reference).toBeDefined();
		expect(reference).toBe(progeny);
	});

	it('should handle plain paths', function () {
		var expected = '{' + [fixturePaths.b, fixturePaths.c] + ',}',
			result;

		expect(function () {
			result = progeny(fixturePaths.b);
		}).not.toThrow();

		expect(result).toEqual(expected);
	});

	it('should process paths that are, or contain, grunt templates', function () {
		var expected = '{' + [fixturePaths.a, fixturePaths.b, fixturePaths.c] + ',}',
			result;

		expect(function () {
			result = progeny('<%= path %>');
		}).not.toThrow();

		expect(result).toEqual(expected);
	});

	it('should function correctly when executed from a grunt template', function () {
		var template = '<%= grunt.template.progeny(path) %>',
			expected = '{' + [fixturePaths.a, fixturePaths.b, fixturePaths.c] + ',}',
			result;

		expect(function () {
			result = grunt.template.process(template);
		}).not.toThrow();

		expect(result).toEqual(expected);
	});
});
