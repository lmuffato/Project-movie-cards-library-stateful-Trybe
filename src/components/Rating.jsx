// import React from 'react';
// import PropTypes from 'prop-types';

// class Rating extends React.Component {
// render() {
//   const { rating } = this.props;

//     return (
//       <div className="movie-card-rating" data-testid="rating">
//         <span className="rating">{rating}</span>
//       </div>
//     );
//   }
// }

// Rating.propTypes = { rating: PropTypes.number };

// Rating.defaultProps = {
//   rating: 'undefined',
// };

// export default Rating;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, handleChange } = this.props;
    const { rating } = this.props;

    return (
      <main>
        <div className="movie-card-rating" data-testid="rating">
          <span className="rating">{rating}</span>
        </div>

        <label data-testid="rating-input-label" htmlFor="input-rating">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ value }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
      </main>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  value: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

Rating.defaultProps = {
  value: 'undefined',
  rating: 'undefined',
};

export default Rating;
