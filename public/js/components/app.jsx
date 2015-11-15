"use strict";

// var React = require('react');
// var ReactDOM = require('react-dom');

// var MyCompo = React.createClass({
//     render: function() {
//         return (
//             <h1>Hello, wolrd!</h1>
//             );
//     }
// })

// ReactDOM.render(
//     <MyCompo/>,
//       document.getElementById('app')
//     );
// var Hello = React.createClass({displayName: 'Hello',
//   render: function() {
//     return React.createElement("h1", null, "Hello ");
//   }
// });

import React from 'react';
import Note from './note.jsx';

export default () => {
  return <Note />;
};