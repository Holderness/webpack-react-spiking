// import React from 'react';

// export default class Note extends React.Component {
//   render() {
//     return <div>Learn Webpack</div>;
//   }
// }

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

// export default React.createClass({
//   render: function() {
//     return (
//       <h1>Helo, {this.props.name}!</h1>
//     );
//   }
// });

export class Note extends React.Component {
  render() {
    return (
      <h1 className="note-title">Helo, {this.props.name}!</h1>
    );
  }
}

export class NoteList extends React.Component {
  renderAllNotes () {

  }
  render() {
    return (
      <div className="note-list">
        <Note name={this.props.note.title} />
        <p> Note: {this.props.note.content} </p>
      </div>
    );
  }
}

var note = { title: 'I\'m a bus!', content: 'Choo choo motherfucker!' }
ReactDOM.render(<NoteList note={note} />, document.getElementById('list'))

// React.render(<Note name="erisfafsa" />, document.getElementById('app'));





// import React, { Component } from 'react';

// export default class Note extends Component{
//   render () {
//     return (
//       <h1>Helo, {this.props.name}!</h1>
//     );
//   }
// };