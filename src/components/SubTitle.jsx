import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value,
      onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="input">
        Subtítulo
        <input
          type="textarea"
          id="input"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
//   name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
};

export default Subtitle;
