import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class KittenHandler extends Component {
  handleClick() {
    this.context.editor.insertCard('kitten', {
      items: ['hello', 'my', 'good', 'friend']
    });
  }

  render() {
    return (
      <button
        onClick={this.handleClick.bind(this)}
      >
        Add a kitten!
      </button>
    );
  }
}

KittenHandler.contextTypes = {
  editor: PropTypes.object
};
