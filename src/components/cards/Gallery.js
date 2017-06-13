import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import { classToDOMCard } from 'react-mobiledoc-editor';

/**
  Handles the adding/deleting of
  gallery items and the subsequent markup
  that gets rendered into the editor.
*/
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.payload.images
    };
  }

  addImage() {
    const newItem = { value: '' };

    this.setState(prevState => ({
      images: prevState.images.concat([newItem])
    }));
  }

  updateValue(index, newValue) {
    this.setState({
      images: update(this.state.images, {
        [index]: {
          value: {
            $set: newValue
          }
        }
      })
    });
  }

  saveGallery() {
    this.props.save({
      images: this.state.images
    });
  }

  render() {
    const { isInEditor, payload, edit, isEditing } = this.props;

    if (isEditing) {
      return (
        <div>
          <ul>
            {this.state.images.map((item, index) => (
              <ListItem
                item={item}
                index={index}
                key={index}
                updateValue={this.updateValue.bind(this)}
              />
            ))}
          </ul>
          <button onClick={this.addImage.bind(this)}>Add image</button>
          <button onClick={this.saveGallery.bind(this)}>Save</button>
        </div>
      );
    } else {
      const onClick = isInEditor ? edit : null;
      return (
        <div>
          <ul>
            {payload.images.map(image => (
              <li>
                <img src={image.value} />
              </li>
            ))}
          </ul>
          {isInEditor && <button onClick={onClick}>Edit gallery</button>}
        </div>
      );
    }
  }
}

const GalleryCard = classToDOMCard(Gallery, 'gallery');

export default GalleryCard;


/**
  Render each input for images in
  edit mode.
*/
class ListItem extends Component {
  handleChange(event) {
    const { index, updateValue } = this.props;
    updateValue(index, event.target.value);
  }

  render() {
    return (
      <li>
        <input
          type="text"
          placeholder="Enter full image URL"
          value={this.props.item.value}
          onChange={this.handleChange.bind(this)}
        />
      </li>
    );
  }
}


/**
  Clicking this inserts a gallery card into
  the editor field in "edit" mode. After it's inserted,
  all adding/deleting of items will be handled by the
  Gallery component.
*/
export class GalleryButton extends Component {
  handleClick() {
    this.context.editor.insertCard('gallery', {
      images: []
    });
  }

  render() {
    return (
      <button
        onClick={this.handleClick.bind(this)}
      >
        Insert gallery
      </button>
    );
  }
}

GalleryButton.contextTypes = {
  editor: PropTypes.object
};
