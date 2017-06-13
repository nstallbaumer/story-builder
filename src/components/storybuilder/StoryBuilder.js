import 'mobiledoc-kit/dist/css/mobiledoc-kit.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mobiledoc from 'mobiledoc-kit';
import {
  Container,
  Editor,
  MarkupButton,
  SectionButton
} from 'react-mobiledoc-editor';

import styles from './styles.scss';
import Renderer from '../renderer/Renderer';
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
    className={styles.container}
  >
    {sections.map(tag => (
      <SectionButton
        key={tag}
        tag={tag}
        className={styles.button}
      />
    ))}

    {markups.map(tag => (
      <MarkupButton
        key={tag}
        tag={tag}
        className={styles.button}
      />
    ))}

    {cards.buttonComponents.map((component, index) => (
      React.createElement(component, {
        key: index,
        className: styles.button
      }, null)
    ))}

    <Editor className={styles.editor} />

    <Renderer
      cards={cards.handlerComponents}
      atoms={atoms.meta}
    />
  </Container>
);

export default StoryBuilder;
