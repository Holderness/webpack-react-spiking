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

export class NoteList1 extends React.Component {
  render() {
    return (
      <div className="note-list">
        <Note name={this.props.note.title} />
        <p> Note: {this.props.note.content} </p>
      </div>
    );
  }
}






// React.render(<Note name="erisfafsa" />, document.getElementById('app'));


// import React, { Component } from 'react';

// export default class Note extends Component{
//   render () {
//     return (
//       <h1>Helo, {this.props.name}!</h1>
//     );
//   }
// };






var NoteSummary = React.createClass({
  render: function () {
    var note = this.props.note;
    var title = note.content.substring(0,
      note.content.indexOf('\n')
    );
    title = title || note.content;

    return (
      <div className="note-summary">{title}</div>
    );
  }
});

export var NoteList2 = React.createClass({
  render: function() {
    var notes = this.props.notepad.notes;

    return (
      <div className="note-list">
      {
        notes.map(function (note) {
          return (
            <NoteSummary key={note.id} note={note}/>
          );
        })
      }
      </div>
    );
  }
});





export var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div className="my-component">
        <h1 onClick={this.incrementCount}>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});


// module.exports = NotesList;
// ReactDOM.render(<NotesList notepad={notepad} />, document.getElementById('app'));
