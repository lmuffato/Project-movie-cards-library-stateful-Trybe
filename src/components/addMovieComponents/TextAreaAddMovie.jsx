import React from 'react';
import PropTypes from 'prop-types';

class TextAreaAddMovie extends React.Component {
  render() {
    const {
      tAreaValue,
      handle,
    } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            onChange={ handle }
            data-testid="storyline-input"
            name="storyline"
            value={ tAreaValue }
            id="storyline-input"
          />
        </label>
      </div>
    );
  }
}

TextAreaAddMovie.propTypes = {
  handle: PropTypes.func.isRequired,
  tAreaValue: PropTypes.string.isRequired,
};

export default TextAreaAddMovie;
