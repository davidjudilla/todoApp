//var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import storage from './storage';
import './style.css';

if(module.hot) {
    module.hot.accept()
}

// We don't use stateless functions because we're setting state
// var App = () => {
//
// }

var notes = [];

//initialize notes
// if (!storage.get('notes')) {
//     storage.set('notes', JSON.stringify(notes));
//     console.log('note storage created');
// } else {
//     notes = storage.get('notes');
//     if (typeof notes == 'string'){
//         throw 'notes is a string';
//     }
// }

//var notes = ["david"];

var App = React.createClass({
    getInitialState() {
        return {
            notes: []
        }
    },

    handleKeyPress(e) {
        if (e.key === 'Enter') this.addItem();
    },

    addItem() {
        var input = document.getElementById('noteName').value;
        // ES5
        // this.state.notes.concat(input)
        this.setState({
            notes: [...this.state.notes, input]
        });
        document.getElementById('noteName').value = '';
    },
    deleteItem(index) {
        this.setState({
            // ES5
            // this.state.notes.slice( 0, index ).concat(this.state.notes.slice( index + 1 ))
            // Here we use the new spread operator
            notes: [...this.state.notes.slice(0, index),
                    ...this.state.notes.slice(index + 1)]
        })
    },

    renderNotes() {
        return this.state.notes.map(( note, index ) => {
            return (
                <div>
                    <li onClick={this.deleteItem.bind(this, index)}>{ note } </li>
                    <button className="deleteBtn" onClick={this.deleteItem.bind(this, index)}>-</button>
                </div>
            )
        })
    },

    render () {
       return (
           <div>
                <input onKeyPress={this.handleKeyPress} id="noteName" />
                <button onClick={this.addItem} id="addItem">+</button>
                <ul id="notes">{this.renderNotes()}</ul>
           </div>
       )
   }
});

var styles = {};
styles.note = {
    display: 'inline-block',
    borderStyle: 'none',
    borderBottom: '4px solid',
    borderBottomColor: '#A00000',
    cursor: 'pointer'
};
styles.completedNote = Object.assign({}, styles.note, {
    textDecoration: 'line-through'
});

ReactDOM.render(<App />, document.getElementById('root'));
