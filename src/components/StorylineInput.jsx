import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            name="storyline"
            data-testid="storyline-input"
            id="storyline-input"
            onChange={ handleChange }
            value={ storyline }
          />
        </label>
      </div>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StorylineInput;
