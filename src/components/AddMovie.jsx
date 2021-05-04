// implement AddMovie component here
import React from 'react';
// import propTypes from 'prop-types';
// import MovieTitle from './MovieComponents/MovieTitle';
// import MovieSubtitle from './MovieComponents/MovieSubtitle';
// import MovieImage from './MovieComponents/MovieImage';
// import MovieStoryLine from './MovieComponents/MovieStoryline';
// import MovieRating from './MovieComponents/MovieRating';
// import MovieGenre from './MovieComponents/MovieGenre';
// import MovieButtonAdd from './MovieComponents/MovieButtonAdd';
const MovieTitle = require('./MovieComponents/MovieTitle');
const MovieSubtitle = require('./MovieComponents/MovieSubtitle');
const MovieImage = require('./MovieComponents/MovieImage');
const MovieStoryLine = require('./MovieComponents/MovieStoryline');
const MovieRating = require('./MovieComponents/MovieRating');
const MovieGenre = require('./MovieComponents/MovieGenre');
const MovieButtonAdd = require('./MovieComponents/MovieButtonAdd');

class AddMovie extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyLine: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  render() {
    // const { onClick } = this.props;
    // const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieTitle />
        <MovieSubtitle />
        <MovieImage />
        <MovieStoryLine />
        <MovieRating />
        <MovieGenre />
        <MovieButtonAdd />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: propTypes.func.isRequired,
// };

export default AddMovie;
