import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, handleValue } = this.props;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          type="textarea"
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ handleValue }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default Storyline;

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};
