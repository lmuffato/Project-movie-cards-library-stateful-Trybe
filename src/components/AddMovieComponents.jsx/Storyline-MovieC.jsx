import React from 'react';
import PropTypes from 'prop-types';

class StorylineMovieC extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storylineMovie">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storylineMovie"
          value={ storyline }
          type="text"
          name="storyline"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineMovieC.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default StorylineMovieC;
