import KittenHandler, { KittenCard } from './components/cards/Kitten.js';

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
    {
      componentName: KittenHandler,
      key: 'kitten'
    }
  ]
};


export const atoms = {
  meta: [

  ],

  components: [

  ]
};
