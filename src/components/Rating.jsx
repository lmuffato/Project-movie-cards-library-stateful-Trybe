import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}
// Feito baseado na análise do PR do João nascimento e no seguinte site:
// https://jaketrent.com/post/react-oneof-vs-oneoftype
Rating.propTypes = { rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;
