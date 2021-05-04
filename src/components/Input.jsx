import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { callback, value, data } = this.props;
    const { testidInput, testidLabel, name, labelName } = data;
    return (
      <div>
        <label data-testid={ testidLabel } htmlFor={ name }>
          { labelName }
          <input
            onChange={ callback }
            data-testid={ testidInput }
            value={ value }
            type="text"
            name={ name }
            id={ name }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  testidLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testidInput: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Input;
