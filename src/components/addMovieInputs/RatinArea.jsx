import React from 'react';
import PropTypes from 'prop-types';

class RatinArea extends React.Component {
  render() {
    const { rating, handleRat, storyline, handleSto } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="titleRating">
          Avaliação
          <input
            onChange={ handleRat }
            id="titleRating"
            type="number"
            value={ rating }
            data-testid="rating-input"
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyInput">
          Sinopse
          <input
            onChange={ handleSto }
            id="storyInput"
            type="text"
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

RatinArea.propTypes = {
  storyline: PropTypes.string,
  handleSto: PropTypes.func,
  rating: PropTypes.number,
  handleRat: PropTypes.func,
}.isRequired;

export default RatinArea;
