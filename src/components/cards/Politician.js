import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classToDOMCard } from 'react-mobiledoc-editor';

class Politician extends Component {
  constructor(props) {
    super(props);

    const { politician, id } = this.props.payload;

    this.state = {
      politician,
      id
    };
  }

  handleChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  fetchPolitician() {
    this.setState({
      politician: require('../../fakeAPI.json').results[0]
    });
  }

  savePolitician() {
    const { politician, id } = this.state;

    this.props.save({
      politician,
      id
    });
  }

  render() {
    const { isInEditor, payload, edit, isEditing } = this.props;

    if (isEditing) {
      return (
        <div>
          <input
            type="text"
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.fetchPolitician.bind(this)}>Fetch</button>
          <button onClick={this.savePolitician.bind(this)}>Save</button>
        </div>
      );
    } else {
      const onClick = isInEditor ? edit : null;
      return (
        <div>
          <h1>{this.state.politician.name}</h1>
          <h2>{this.state.politician.office}</h2>
          <img src={this.state.politician.headshot} />
          {isInEditor && <button onClick={onClick}>Edit politician</button>}
        </div>
      );
    }
  }
}

const PoliticianCard = classToDOMCard(Politician, 'politician');

export default PoliticianCard;


export class PoliticianButton extends Component {
  handleClick() {
    this.context.editor.insertCard('politician', {
      id: 0,
      politician: {
        name: '',
        office: '',
        headshot: ''
      }
    });
  }

  render() {
    return (
      <button
        onClick={this.handleClick.bind(this)}
      >
        Insert politician
      </button>
    );
  }
}

PoliticianButton.contextTypes = {
  editor: PropTypes.object
};
