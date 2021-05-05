import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { t, v, o, n, s } = this.props;
    let { i } = this.props;
    if (i === '') i = n;
    return (
      <label htmlFor={ i } data-testid={ `${n}-input-label` }>
        {s}
        <input
          type={ t }
          value={ v }
          onChange={ o }
          name={ i }
          data-testid={ `${n}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  t: PropTypes.string.isRequired,
  v: PropTypes.string.isRequired,
  o: PropTypes.func.isRequired,
  n: PropTypes.string.isRequired,
  s: PropTypes.string.isRequired,
  i: PropTypes.string,
};

Input.defaultProps = {
  i: '',
};

export default Input;
