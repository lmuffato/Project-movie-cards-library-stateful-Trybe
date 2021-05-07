import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { datatestid, datatestidinput, type, name, change, value, info } = this.props;
    return (
      <label data-testid={ datatestid } htmlFor={ datatestidinput }>
        { info }
        <input
          data-testid={ datatestidinput }
          type={ type }
          name={ name }
          value={ value }
          onChange={ change }
        />
      </label>
    );
  }
}
Input.defaultProps = {
  datatestid: PropTypes.string,
  datatestidinput: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  change: PropTypes.func,
  info: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Input.propTypes = {
  datatestid: PropTypes.string,
  datatestidinput: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  change: PropTypes.func,
  info: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Input;
