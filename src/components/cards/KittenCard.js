import React, { Component } from 'react';
import { classToDOMCard } from 'react-mobiledoc-editor';

const Kitten = ({ payload }) => {
  return (
    <ul>
      {payload.items.map(item => (
        <li key={Math.random()}>{item}</li>
      ))}
    </ul>
  );
};

const KittenCard = classToDOMCard(Kitten, 'kitten');

export default KittenCard;
