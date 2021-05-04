import React from 'react';

class MovieRating extends React.Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <textarea
          name="rating-input"
          type="text"
          // value={ rating }
          data-testid="rating-input"
          // onChange={ onClick }
        />
      </label>
    );
  }
}

export default MovieRating;
