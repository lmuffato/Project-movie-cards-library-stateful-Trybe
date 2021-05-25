import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
