import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mobiledoc from 'mobiledoc-kit';
import {
  Container,
  Editor,
  MarkupButton,
  SectionButton
} from 'react-mobiledoc-editor';

import Renderer from '../renderer/Renderer';
import {
  atoms,
  cards,
  sections,
  markups
} from '../../setup.js';

const StoryBuilder = () => (
  <Container
    cards={cards.meta}
    atoms={atoms.meta}
  >
    {sections.map(tag => (
      <SectionButton
        key={tag}
        tag={tag}
      />
    ))}

    {markups.map(tag => (
      <MarkupButton
        key={tag}
        tag={tag}
      />
    ))}

    {cards.components.map(card => (
      React.createElement(card.componentName, {
        key: card.key
      }, null)
    ))}

    <Editor/>
  </Container>
);

export default StoryBuilder;
