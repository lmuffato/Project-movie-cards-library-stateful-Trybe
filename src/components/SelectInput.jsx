import React from 'react';
import PropTypes from 'prop-types';

function SelectInput(props) {
  const {
    label,
    value,
    onChange,
    options,
    selectTestID,
    labelTestID,
    optionTestID,
    name,
  } = props;

  return (
    <label htmlFor="select-input" data-testid={ labelTestID }>
      {label}

      <select
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ selectTestID }
      >
        {options && options.map((item) => (
          <option
            key={ item.value }
            data-testid={ optionTestID }
            value={ item.value }
          >
            {item.name}

          </option>))}
      </select>
    </label>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectTestID: PropTypes.string.isRequired,
  labelTestID: PropTypes.string.isRequired,
  optionTestID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectInput;
