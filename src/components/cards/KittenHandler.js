import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class KittenHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'foo',
        'bar',
        'sun',
        'fun'
      ]
    };
  }

  handleClick(e) {
    this.props.editor.insertCard('kitten');
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Kitten</button>
    );
  }
}
