import React, { Component } from 'react';
import Mobiledoc from 'mobiledoc-kit';

export default class Formatter extends Component {
  handleClick(e) {
    const { formatType, editor, element } = this.props;

    if (formatType === 'section') {
      editor.toggleSection(element);
    } else if (formatType === 'markup') {
      editor.toggleMarkup(element);
    }
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.props.name}</button>
    );
  }
}
