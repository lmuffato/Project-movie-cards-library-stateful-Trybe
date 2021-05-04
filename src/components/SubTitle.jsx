import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value,
      onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
        Subtítulo
        <input
          type="textarea"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Subtitle;
