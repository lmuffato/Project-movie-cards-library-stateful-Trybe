import React from 'react';
import PropTypes from 'prop-types';

function Storyline(props) {
  const { newState, value } = props;
  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        id="storyline"
        cols="30"
        rows="10"
        data-testid="storyline-input"
        onChange={ newState }
        value={ value }
      />
    </label>
  );
}

Storyline.propTypes = {
  newState: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Storyline;
