import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
          value={ storyline }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
