import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label htmlFor="text-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ changes }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string,
  changes: PropTypes.func,
}.isRequired;

export default TitleInput;
