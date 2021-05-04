import React from 'react';
import PropTypes from 'prop-types';

class InputLabel extends React.Component {
  render() {
    const { name, type, handler, description, value, tag } = this.props;
    return (
      <label htmlFor={ `${tag}-input` } data-testid={ `${tag}-input-label` }>
        { description }
        <input
          id={ `${tag}-input` }
          name={ `${name}` }
          type={ `${type}` }
          data-testid={ `${tag}-input` }
          onChange={ handler }
          value={ value }
        />
      </label>
    );
  }
}

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  value: PropTypes.node,
};

InputLabel.defaultProps = {
  value: '',
};

export default InputLabel;
