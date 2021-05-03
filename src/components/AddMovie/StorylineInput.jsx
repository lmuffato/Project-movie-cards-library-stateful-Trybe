import React from 'react';
import PropTypes from 'prop-types';

export default class StorylineInput extends React.Component {
  render() {
    const { storyline, handleStory } = this.props;
    return (
      <label htmlFor="st" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="st"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleStory }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleStory: PropTypes.func.isRequired,
};
