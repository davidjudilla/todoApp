import React from 'react';
import ReactDOM from 'react-dom';

//class Note extends React.Component {...}
//var Note = React.createClass({...})

var Note = ({value}) => {
  return (
    <li>{value}</li>
  )
}

export default Note;
