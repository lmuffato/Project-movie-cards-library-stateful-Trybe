import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ value, callback }) => (
  <label htmlFor="true" data-testid="rating-input-label">
    Avaliação
    <input
      name="rating"
      type="number"
      value={ value }
      data-testid="rating-input"
      onChange={ callback }
    />
  </label>
);

Field.propTypes = PropTypes.shape({
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  data: PropTypes.string,
  callback: PropTypes.func,
}).isRequired;

export default Field;
