import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classToDOMCard } from 'react-mobiledoc-editor';

import styles from './styles.scss';

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

          <button
            onClick={this.fetchPolitician.bind(this)}
            className={styles.cardButton}
          >
            Fetch
          </button>

          <button
            onClick={this.savePolitician.bind(this)}
            className={styles.cardButton}
          >
            Save
          </button>
        </div>
      );
    } else {
      const onClick = isInEditor ? edit : null;
      return (
        <div>
          <h1 className={styles.politician}>
            {this.state.politician.name}, {this.state.politician.office}
          </h1>
          <img className={styles.headshot} src={this.state.politician.headshot} />
          {isInEditor && <button onClick={onClick} className={styles.cardButton}>Edit politician</button>}
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
        className={this.props.className}
      >
        Insert politician
      </button>
    );
  }
}

PoliticianButton.contextTypes = {
  editor: PropTypes.object
};
