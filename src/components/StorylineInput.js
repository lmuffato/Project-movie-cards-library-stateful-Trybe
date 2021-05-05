import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StorylineInput;
