import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ value, callback }) => (
  <label htmlFor="true" data-testid="image-input-label">
    Imagem
    <input
      name="imagePath"
      type="text"
      value={ value }
      data-testid="image-input"
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
