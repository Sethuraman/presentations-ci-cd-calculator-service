'use strict';

const Calculator = require('./calculator');


module.exports.add = (event, context, callback) => {
  console.log('here ia a log');
  var number1 = parseInt(event["queryStringParameters"]["number1"]);
  var number2 = parseInt(event["queryStringParameters"]["number2"]);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result: Calculator.add(number1, number2)
    }),
  };

  callback(null, response);
};

module.exports.subtract = (event, context, callback) => {
  let number1 = parseInt(event["queryStringParameters"]["number1"]);
  let number2 = parseInt(event["queryStringParameters"]["number2"]);

  console.log(event["queryStringParameters"])
  console.log(`numbers = ${number1} and ${number2}`)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result: Calculator.subtract(number1, number2)
    }),
  };

  callback(null, response);
};

module.exports.multiply = (event, context, callback) => {
  var number1 = parseInt(event["queryStringParameters"]["number1"]);
  var number2 = parseInt(event["queryStringParameters"]["number2"]);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result: Calculator.multiply(number1, number2)
      }),
  };

  callback(null, response);
};


