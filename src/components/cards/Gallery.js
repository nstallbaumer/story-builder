import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classToDOMCard } from 'react-mobiledoc-editor';

import DynamicList from '../utils/DynamicList';

/**
  Handles the adding/deleting of
  gallery items and the subsequent markup
  that gets rendered into the editor.
*/
class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  insertGallery() {

  }

  render() {
    return (
      <div>
        <DynamicList
          items={this.state.images}
          insertGallery={this.insertGallery.bind(this)}
        />
      </div>
    );
  }
}

const GalleryCard = classToDOMCard(Gallery, 'gallery');

export default GalleryCard;


/**
  Clicking this inserts a gallery card into
  the editor field in "edit" mode. After it's inserted,
  all adding/deleting of items will be handled by the
  Gallery component.
*/
export class GalleryButton extends Component {
  handleClick() {
    this.context.editor.insertCard('gallery', {
      foo: 'bar'
    });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Insert gallery</button>
    );
  }
}

GalleryButton.contextTypes = {
  editor: PropTypes.object
};
