import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classToDOMCard } from 'react-mobiledoc-editor';

/**
  Handles the user logic for adding/deleting items
  and making them part of a card's payload
*/
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


/**
  The card itself. It receives data as
  its payload parameter and subequently renders
  that data into a React component.
*/
const Kitten = ({ payload }) => (
  <ul>
    {payload.items.map(item => (
      <li key={Math.random()}>{item}</li>
    ))}
  </ul>
);

Kitten.propTypes = {
  payload: PropTypes.shape({
    items: PropTypes.array.isRequired
  }).isRequired
};

export const KittenCard = classToDOMCard(Kitten, 'kitten');
