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

	it('should run progeny with LESS files correctly', function () {
		var result;

		expect(function () {
			result = progeny(fixturePaths.a);
		}).not.toThrow();

		expect(result).toEqual([
			fixturePaths.b,
			fixturePaths.c
		]);
	});

	it('should process path templates', function () {
		var result;

		expect(function () {
			result = progeny('<%= path %>');
		}).not.toThrow();

		expect(result).toEqual([
			fixturePaths.b,
			fixturePaths.c
		]);
	});

	it('should function correctly when executed from a grunt template', function () {
		var template = '<%= grunt.template.progeny(path) %>',
			result;

		expect(function () {
			result = grunt.template.process(template);
		}).not.toThrow();

		expect(result).toEqual([
			fixturePaths.b,
			fixturePaths.c
		].join(','));
	});
});
