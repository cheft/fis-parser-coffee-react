var transform = require('coffee-react-transform');

var fs = require('fs');
fs.writeFileSync('coffee-react.coffee', transform(fs.readFileSync('coffee-react.cjsx', 'utf-8')));