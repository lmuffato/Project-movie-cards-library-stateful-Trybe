import React from 'react';
import propTypes from 'prop-types';

class MovieStoryline extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="image-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default MovieStoryline;

MovieStoryline.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
