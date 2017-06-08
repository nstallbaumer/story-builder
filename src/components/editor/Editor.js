import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mobiledoc from 'mobiledoc-kit';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.buildEditor();
  }

  buildEditor() {
    const editor = new Mobiledoc.Editor({
      placeholder: 'Welcome to Mobiledoc'
    });

    editor.render(this.editorEl);
  }

  render() {
    return (
      <div
        ref={(div) => { this.editorEl = div; }}
      >
      </div>
    );
  }
}
