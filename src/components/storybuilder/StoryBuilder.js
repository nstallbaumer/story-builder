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
import Formatter from '../formatter/Formatter';
import {
  atoms,
  cards,
  sections,
  markups
} from '../../setup.js';

export default class StoryBuilder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container
        cards={cards.meta}
        atoms={atoms.meta}
        placeholder={'Enter your text here'}
      >
        <Editor/>

        {sections.map(tag => (
          <SectionButton tag={tag} />
        ))}

        {markups.map(tag => (
          <MarkupButton tag={tag} />
        ))}
      </Container>
    );
  }
}
