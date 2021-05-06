import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, value, onChange, options, labelText } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        <select
          id={ id }
          value={ value }
          onChange={ onChange }
          data-testid={ id }
        >
          {
            options.map((option) => (
              <option
                key={ option.value }
                value={ option.value }
                data-testid={ option.id }
              >
                {option.text}
              </option>
            ))
          }
        </select>
        {labelText}
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Select;
