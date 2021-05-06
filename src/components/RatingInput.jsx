import React from 'react';

class RatingInput extends React.Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default RatingInput;
