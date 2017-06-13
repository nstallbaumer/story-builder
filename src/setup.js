import GalleryCard, { GalleryButton } from './components/cards/Gallery.js';
import PoliticianCard, { PoliticianButton } from './components/cards/Politician.js';

export const sections = [
  'h1',
  'h2'
];


export const markups = [
  'strong',
  'em'
];


export const cards = {
  handlerComponents: [
    GalleryCard,
    PoliticianCard
  ],

  buttonComponents: [
    GalleryButton,
    PoliticianButton
  ]
};


export const atoms = {
  meta: [

  ],

  components: [

  ]
};
