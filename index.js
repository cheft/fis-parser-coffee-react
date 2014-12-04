'use strict';

var fs = require('fs');

var transform = require('coffee-react-transform');
var coffee = require('coffee-script');

module.exports = function(content, file, conf){
	var ccode = transform(fs.readFileSync(conf.filename, 'utf-8'));
    return coffee.compile(ccode);
};