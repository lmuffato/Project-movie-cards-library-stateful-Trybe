import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="newMovieStoryline" data-testid="storyline-input-label">
        Sinopse
        <input
          id="newMovieStoryline"
          name="storyline"
          type="textarea"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;
