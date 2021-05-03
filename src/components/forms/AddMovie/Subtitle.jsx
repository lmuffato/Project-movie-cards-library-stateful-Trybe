import React from 'react';
import PropTypes from 'prop-types';

function Subtitle({ value, onChange }) {
  return (
    <label htmlFor="subtitle" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        name="subtitle"
        value={ value }
        data-testid="subtitle-input"
        onChange={ onChange }
      />
    </label>
  );
}

Subtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitle;
