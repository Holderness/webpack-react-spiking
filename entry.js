require('html!./index.html')
// require('!style!css!./public/build/style.css');
require('!style!css!less!./public/less/main.less');

// require('./src/index.less');

document.write(require('./content.js'));

var poo = 'butter'

document.write('peanut'+poo);


