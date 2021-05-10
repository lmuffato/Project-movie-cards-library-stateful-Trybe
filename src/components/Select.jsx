import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends React.Component {
  render() {
    const {
      label,
      select,
      name,
      text,
      options,
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ select } data-testid={ label }>
        {text}
        <select
          data-testid={ select }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {options.map((option) => <Option key={ option.value } { ...option } />)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
