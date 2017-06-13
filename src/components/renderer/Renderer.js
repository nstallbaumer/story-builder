import React, { Component } from 'react';
import PropTypes from 'prop-types';
const DOMRenderer = require('mobiledoc-dom-renderer').default;

import styles from './styles.scss';

export default class Renderer extends Component {
  fragmentToText(frag) {
    const div = document.createElement('div');
    div.appendChild(frag.cloneNode(true));
    return div.innerHTML;
  }

  handleClick() {
    const { cards, atoms } = this.props;
    const renderer = new DOMRenderer({
      cards,
      atoms
    });

    const mobiledoc = this.context.editor.serialize();
    const rendered = renderer.render(mobiledoc);
    const markupAsText = this.fragmentToText(rendered.result);

    this.html.textContent = markupAsText;
    this.data.textContent = JSON.stringify(mobiledoc);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Render!</button>
        <div className={styles.section} ref={(html) => { this.html = html; }}></div>
        <div className={styles.section} ref={(data) => { this.data = data; }}></div>
      </div>
    );
  }
}

Renderer.contextTypes = {
  editor: PropTypes.object
};
