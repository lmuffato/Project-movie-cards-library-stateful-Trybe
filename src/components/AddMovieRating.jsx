import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

export default Rating;
