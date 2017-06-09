import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StoryBuilder from '../storybuilder/StoryBuilder';

const App = ({ description }) => {
  return (
    <div>
      <StoryBuilder/>
    </div>
  );
}

App.propTypes = {
  description: PropTypes.string
};

export default App;
