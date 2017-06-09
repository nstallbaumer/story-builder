import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import KittenHandler from './components/cards/KittenHandler.js';
import KittenCard from './components/cards/Kitten.js';

export const formatters = [
  {
    name: 'heading1',
    element: 'h1',
    formatType: 'section'
  },

  {
    name: 'bold',
    element: 'strong',
    formatType: 'markup'
  }
];


export const cards = {
  meta: [
    KittenCard
  ],

  components: [
    KittenHandler
  ]
};


export const atoms = {
  meta: [

  ],

  components: [

  ]
};
