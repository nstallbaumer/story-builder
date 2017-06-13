import React, { Component } from 'react';
import update from 'react-addons-update';

export default class DynamicList extends Component {
  handleAdd() {
    this.props.addImage();
  }

  handleSave() {
    const paredList = this.removeEmptyItems();
    this.props.saveGallery(paredList);
  }

  updateValue(index, newValue) {
    this.setState({
      items: update(this.state.items, {
        [index]: {
          value: {
            $set: newValue
          }
        }
      })
    });
  }

  removeEmptyItems() {
    return this.state.items.filter(item => (
      item.value !== '' && item.value !== null
    ));
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              item={item}
              updateValue={this.updateValue.bind(this)}
            />
          ))}
        </ul>
        <button onClick={this.handleAdd.bind(this)}>Add another item</button>
        <button onClick={this.handleSave.bind(this)}>Save</button>
      </div>
    );
  }
}


class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { index, updateValue } = this.props;
      updateValue(index, this.state.value);
    }
  }

  render() {
    const { value } = this.props.item;

    return (
      <li>
        <input
          type="text"
          placeholder="Enter full image URL"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
      </li>
    );
  }
}
