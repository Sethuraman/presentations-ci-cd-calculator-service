'use strict';

const Calculator = require('../../calculator');
const chai = require('chai')
const assert = chai.assert;

describe("Calculator test", function() {

	it("correctly adds two numbers", function(){
		assert.equal(Calculator.add(4, 5), 9);
	});

	it("correctly subtracts two numbers", function(){
		assert.equal(Calculator.subtract(8, 3), 5);
	});

	it("correctly multiplies two numbers", function(){
		assert.equal(Calculator.multiply(4, 5), 20);
	});
});