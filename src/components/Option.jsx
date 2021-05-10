import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { id, value, text } = this.props;
    return (
      <option data-testid={ id } value={ value }>{text}</option>
    );
  }
}

Option.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option;
