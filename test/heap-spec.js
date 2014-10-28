
var Heap = require('../src/heap'),
		expect = require('chai').expect;

describe('Heap', function() {
	describe('#creation', function() {
		it('should populate heap if data is provided', function(done) {
			var myHeap = new Heap([1,3,2,4,5]);
			expect(myHeap.size()).to.equal(5);
			done();
		});

		it('should create an empty heap if no data is provided', function(done) {
			var heap = new Heap();
			expect(heap.size()).to.equal(0);
			done();
		})
	});

	describe('#deleteMax', function() {
		it('should return max element in heap', function(done) {
			var heap = new Heap([1,4,6,3,9,7]);
			expect(heap.deleteMax()).to.equal(9);
			done();
		});

		it('should remove the max element from the heap', function(done) {
			var heap = new Heap([9,1,2,3,4]);
			var firstMax = heap.deleteMax();
			expect(heap.deleteMax()).to.not.equal(firstMax);
			done();
		});

		it('should return undefined if heap is empty', function(done) {
			var heap = new Heap();
			expect(heap.deleteMax()).to.not.exist;
			done();
		});
	});
});