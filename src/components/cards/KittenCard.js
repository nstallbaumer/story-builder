import React from 'react';
import PropTypes from 'prop-types';
import { classToDOMCard } from 'react-mobiledoc-editor';

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

const KittenCard = classToDOMCard(Kitten, 'kitten');

export default KittenCard;
