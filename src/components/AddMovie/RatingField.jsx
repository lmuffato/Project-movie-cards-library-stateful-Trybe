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
  value: PropTypes.number,
  data: PropTypes.string,
  callback: PropTypes.func,
}).isRequired;

Field.defaultProps = {
  value: 0,
};

export default Field;
