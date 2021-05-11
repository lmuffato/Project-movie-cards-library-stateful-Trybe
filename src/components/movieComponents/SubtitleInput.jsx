import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ changes }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string,
  changes: PropTypes.func,
}.isRequired;

export default SubtitleInput;
