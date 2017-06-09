import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mobiledoc from 'mobiledoc-kit';

import Renderer from '../renderer/Renderer';
import Formatter from '../formatter/Formatter';
import { atoms, cards, formatters } from '../../setup.js';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null,
      formatters,
      cards,
      atoms
    };
  }

  componentDidMount() {
    this.buildEditor();
  }

  buildEditor() {
    const self = this;
    const editor = new Mobiledoc.Editor({
      cards: self.state.cards.meta,
      atoms: self.state.atoms.meta
    });

    editor.render(this.editorEl);
    this.setState(prevState => ({
      editor
    }));
  }

  render() {
    return (
      <div>
        {this.state.editor && this.state.formatters.map(formatter =>
          <Formatter
            editor={this.state.editor}
            element={formatter.element}
            formatType={formatter.formatType}
            key={formatter.name}
            name={formatter.name}
          />
        )}

        {this.state.editor && this.state.cards.components.map(component =>
          React.createElement(component, {
            key: Math.random(),
            editor: this.state.editor
          }, null)
        )}

        {this.state.editor && this.state.atoms.components.map(component =>
          React.createElement(component, {
            key: Math.random(),
            editor: this.state.editor
          }, null)
        )}

        <div ref={(div) => { this.editorEl = div; }}></div>
      </div>
    );
  }
}
