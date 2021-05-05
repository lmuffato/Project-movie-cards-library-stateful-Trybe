import React from 'react';

class InputRating extends React.Component {
  render() {
    const { handleAddMovie, rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="Avaliação">
        Avaliação
        <input
          onChange={ handleAddMovie }
          data-testid="rating-input"
          value={ rating }
          type="number"
          name="rating"
        />
      </label>
    );
  }
}
export default InputRating;
