import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
        Sinopse
        <textarea
          value={ initialStateValue }
          data-testid="storyline-input"
          onChange={ stateHandler }
          name="storyline"
          id="storyline-input-label"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  initialStateValue: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default StorylineInput;
