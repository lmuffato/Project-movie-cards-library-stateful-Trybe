import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, handleValue } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          id="subtitle"
          onChange={ handleValue }
          value={ value }
        />
      </label>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};
