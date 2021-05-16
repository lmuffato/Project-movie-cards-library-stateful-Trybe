import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          type="textarea"
          data-testid="storyline-input"
          defaultValue={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

export default StoryLine;
