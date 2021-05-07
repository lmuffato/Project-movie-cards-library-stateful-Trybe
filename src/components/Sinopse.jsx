import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { handleValue, storyline } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="sinopse"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleValue }
          id="sinopse"
          cols="30"
          rows="10"
        />
      </label>);
  }
}

Sinopse.propTypes = {
  handleValue: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default Sinopse;
