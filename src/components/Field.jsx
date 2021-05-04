import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ label, name, type, value, data, callback }) => (
  <label htmlFor="true" data-testid={ `${data}-label` }>
    { label }
    <input
      name={ name }
      type={ type }
      value={ value }
      data-testid={ data }
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
