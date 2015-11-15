require('html!../../index.html');
require('!style!css!less!../less/main.less');

// require('./components/index.jsx')

document.write(require('./content.js'));

var poo = 'butter'

document.write('peanut'+poo+poo);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}