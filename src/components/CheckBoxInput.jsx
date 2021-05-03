import React from 'react';
import PropTypes from 'prop-types';

function CheckBoxInput(props) {
  const { checked, onChange } = props;

  return (
    <label htmlFor="favorites" data-testid="checkbox-input-label">
      Mostrar somente favoritos

      <input
        type="checkbox"
        name="favorites"
        checked={ checked }
        onChange={ onChange }
        data-testid="checkbox-input"
      />

    </label>
  );
}

CheckBoxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBoxInput;
