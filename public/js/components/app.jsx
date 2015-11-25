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
import ReactDOM from 'react-dom';
import { NoteList2, NoteList1, Counter } from './note.jsx';
import { notepad } from './notepad.jsx';
import { FilteredList } from './filteredList.jsx';


// export default () => {
//   return <Note />;
// };

// ReactDOM.render(<Note name="wolrd!" />, document.getElementById('app'));
// ReactDOM.render(<Compo />, document.getElementById('state'));


var note = { title: 'I\'m a bus!', content: 'Choo choo motherfucker!' }
ReactDOM.render(<NoteList1 note={note} />, document.getElementById('list'))




ReactDOM.render(
  <NoteList2 notepad={notepad} />, 
  document.getElementById('app')
);


ReactDOM.render(<Counter />, document.getElementById('state'));

ReactDOM.render(<FilteredList />, document.getElementById('filteredList'));


