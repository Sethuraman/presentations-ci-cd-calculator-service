'use strict';

const Calculator = require('./calculator');
const chai = require('chai')
const assert = chai.assert;

describe("Calculator test", function() {

	it("should correctly add two numbers", function(){
		assert.equal(Calculator.add(4, 5), 9);
	});

	it("should correctly subtract two numbers", function(){
		assert.equal(Calculator.subtract(8, 3), 5);
	});

	it("should correctly multiply two numbers", function(){
		assert.equal(Calculator.multiply(4, 5), 20);
	});
});