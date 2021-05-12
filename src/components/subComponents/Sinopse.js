import React from 'react';
import PropTypes from 'prop-types';

export default function Sinopse(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        id="storyline"
        value={ value }
        data-testid="storyline-input"
        onChange={ handleChange }
      />
    </label>
  );
}

Sinopse.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
