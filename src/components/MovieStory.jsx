import React from 'react';
import PropTypes from 'prop-types';

class MovieStory extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="movieStory">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="movieStory"
          value={ storyline }
          type="text"
          name="storyline"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

MovieStory.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default MovieStory;
