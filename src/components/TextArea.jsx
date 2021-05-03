import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {
  const { onChange, value } = props;

  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        cols="30"
        rows="10"
        data-testid="storyline-input"
        onChange={ onChange }
        value={ value }
      />

    </label>
  );
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
