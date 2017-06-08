import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Editor from '../editor/Editor';

const App = ({ description }) => {
  return (
    <div>
      <Editor/>
    </div>
  );
}

App.propTypes = {
  description: PropTypes.string
};

export default App;
