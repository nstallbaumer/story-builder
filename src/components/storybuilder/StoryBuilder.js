import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mobiledoc from 'mobiledoc-kit';

import Renderer from '../renderer/Renderer';
import {
  Container,
  Editor,
  MarkupButton,
  SectionButton
} from 'react-mobiledoc-editor';
import {
  atoms,
  cards,
  sections,
  markups
} from '../../setup.js';

const StoryBuilder = () => (
  <Container
    cards={cards.handlerComponents}
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

    {cards.buttonComponents.map((component, index) => (
      React.createElement(component, {
        key: index
      }, null)
    ))}

    <Editor/>
  </Container>
);

export default StoryBuilder;
