var fs = require('fs');

var transform = require('coffee-react-transform');
var coffee = require('coffee-script');

var ccode = transform(fs.readFileSync('coffee-react.coffee', 'utf-8'));
var jscode = coffee.compile(ccode);

fs.writeFileSync('coffee-react.js', jscode);