'use strict';

var fs = require('fs');
var transform = require('coffee-react-transform');

module.exports = function(content, file, conf){
    return transform(fs.readFileSync(conf.filename, 'utf-8'));
};