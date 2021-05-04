import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ value, callback }) => (
  <label htmlFor="true" data-testid="storyline-input-label">
    Sinopse
    <textarea
      name="storyline"
      value={ value }
      data-testid="storyline-input"
      onChange={ callback }
    />
  </label>
);

Field.propTypes = PropTypes.shape({
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  data: PropTypes.string,
  callback: PropTypes.func,
}).isRequired;

export default Field;
