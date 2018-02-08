'use strict';

const chai = require('chai')
const assert = chai.assert;
const should = require('chai').should();

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const URL = process.env.CALCULATION_SERVICE_URL;

describe('Calculator', function() {
	it('GET /add', function(done){
		chai.request(URL)
		.get('/add')
		.query({number1: 5, number2: 7})
		.end(function(err, res) {
			should.not.exist(err);
			res.should.have.status(200);
			assert.equal(res.body.result, 12);
			done();
		});
	});

	it('GET /subtract', function(done){
		chai.request(URL)
		.get('/subtract')
		.query({number1: 5, number2: 7})
		.end(function(err, res) {
			should.not.exist(err);
			res.should.have.status(200);
			assert.equal(res.body.result, -2);
			done();
		});
	});

	it('GET /multiply', function(done){
		chai.request(URL)
		.get('/multiply')
		.query({operand1: 5, operand2: 7})
		.end(function(err, res) {
			should.not.exist(err);
			res.should.have.status(200);
			assert.equal(res.body.result, 35);
			done();
		});
	});
});
