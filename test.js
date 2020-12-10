var assert = require('assert');
var index = require('./index.js');

describe('Screenig Task Tests', function() {
    var result =[];
    var hashmap = new Map();
    var dependency = new Map();

	it('returns []', function(done) {
		assert.strictEqual(main.checkTaskDependancy(hashmap,dependency,result), []);
		done();
	});

	it('returns [a,b]', function(done) {
		assert.strictEqual(main.checkTaskDependancy(hashmap,dependency,result), [a,b]);
		done();
	});
	it('returns [b,a]', function(done) {
		assert.strictEqual(main.checkTaskDependancy(hashmap,dependency,result), [b,a]);
		done();
	});
	it('returns [b,a,d,c]', function(done) {
		assert.strictEqual(main.checkTaskDependancy(hashmap,dependency,result), [b,a,d,c]);
		done();
	});
	it('returns [c,b,a]', function(done) {
		assert.strictEqual(main.checkTaskDependancy(hashmap,dependency,result), [c,b,a]);
		done();
	});
	it('returns [a,b,c,d]', function(done) {
		assert.strictEqual(main.checkTaskDependancy(hashmap,dependency,result),`this is a cyclic dependency`);
		done();
	});

});