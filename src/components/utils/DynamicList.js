import React, { Component } from 'react';

export default class DynamicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  handleAdd() {
    const newItem = { value: null };

    this.setState(prevState => ({
      items: prevState.items.concat([newItem])
    }));
  }

  handleSave() {
    const paredList = this.removeEmptyItems();
    this.props.insertGallery(paredList);
  }

  removeEmptyItems() {
    /*return this.state.items.filter(item => (
      item.value !== '' && item.value !== null
    ));*/
    return [
      { value: 'foo' },
      { value: 'foo' },
      { value: 'foo' }
    ];
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <ListItem
              key={index}
              item={item}
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
  render() {
    const { value } = this.props.item;

    return (
      <li>
        <input
          type="text"
          placeholder="Enter full image URL"
          defaultValue={value || ''}
        />
      </li>
    );
  }
}
