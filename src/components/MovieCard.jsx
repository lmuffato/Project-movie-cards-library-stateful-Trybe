import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonName: 'Favoritar',
    };
  }

  setButtonName = () => {
    const { movie: bookmarked } = this.props;
    this.setState({
      buttonName: bookmarked ? 'Desfavoritar' : 'Favoritar',
    });
  };

  bookmark = () => {
    const { movie } = this.props;
    const { bookmarked } = movie;
    movie.bookmarked = !bookmarked;

    this.setButtonName();
  };

  render() {
    const { buttonName } = this.state;
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={ rating } />
        <button
          type="button"
          className="bookmarked"
          onClick={ this.bookmark }
        >
          {buttonName}
        </button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
  }).isRequired,
};

export default MovieCard;
