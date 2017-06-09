import KittenHandler from './components/cards/KittenHandler.js';
import KittenCard from './components/cards/KittenCard.js';

export const sections = [
  'h1',
  'h2'
];


export const markups = [
  'strong',
  'em'
];


export const cards = {
  meta: [
    KittenCard
  ],

  components: [
    { componentName: KittenHandler, key: 'kitten' }
  ]
};


export const atoms = {
  meta: [

  ],

  components: [

  ]
};
