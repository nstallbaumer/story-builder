import React, { Component } from 'react';
import { classToDOMCard } from 'react-mobiledoc-editor';

class Kitten extends Component {
  render() {
    const items = ['foo', 'bar', 'lala'];

    return (
      <ul>
        {items.map(item => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    );
  }
}

const KittenCard = classToDOMCard(Kitten, 'kitten');

export default KittenCard;
