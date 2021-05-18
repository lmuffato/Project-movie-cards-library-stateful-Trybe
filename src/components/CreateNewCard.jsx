// import React from 'react';
// import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';
import data from '../data';

export default function createNewMovie({
  subtitle,
  title,
  imagePath,
  storyline,
  rating,
  genre,
}) {
  const movie = {
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  };
  data.push(movie);
}

// CreateNewCard.propTypes = {
//   subtitle: PropTypes.string,
//   title: PropTypes.string,
//   imagePath: PropTypes.string,
//   storyline: PropTypes.string,
//   rating: PropTypes.number,
//   genre: PropTypes.string,
// }.isRequired;

// export default CreateNewCard;
