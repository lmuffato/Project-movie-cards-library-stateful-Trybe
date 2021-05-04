import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { storyline, handleInputs } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default StoryLine;
