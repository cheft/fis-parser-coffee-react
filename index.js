'use strict';

var transform = require('coffee-react-transform');
var coffee = require('coffee-script');

module.exports = function(content, file, conf){
	var ccode = transform(content);
    return coffee.compile(ccode, conf);
};