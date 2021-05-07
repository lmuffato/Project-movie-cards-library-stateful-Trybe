import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyLine, handleStory } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          type="textarea"
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ handleStory }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyLine: PropTypes.string.isRequired,
  handleStory: PropTypes.func.isRequired,
};

export default Sinopse;
