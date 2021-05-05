import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { handleAddMovie, storyline } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="Sinopse">
        Sinopse
        <textarea
          value={ storyline }
          onChange={ handleAddMovie }
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  handleAddMovie: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};
export default InputStoryline;
