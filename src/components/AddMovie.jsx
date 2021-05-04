// implement AddMovie component here
import React from 'react';
// import propTypes from 'prop-types';
import MovieTitle from './MovieComponents/MovieTitle';
import MovieSubtitle from './MovieComponents/MovieSubtitle';
import MovieImage from './MovieComponents/MovieImage';
import MovieStoryLine from './MovieComponents/MovieStoryline';
import MovieRating from './MovieComponents/MovieRating';
import MovieGenre from './MovieComponents/MovieGenre';
import MovieButtonAdd from './MovieComponents/MovieButtonAdd';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // handleClick() {

  // }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieTitle handleChange={ this.handleChange } value={ title } />
        <MovieSubtitle handleChange={ this.handleChange } value={ subtitle } />
        <MovieImage handleChange={ this.handleChange } value={ imagePath } />
        <MovieStoryLine handleChange={ this.handleChange } value={ storyLine } />
        <MovieRating handleChange={ this.handleChange } value={ rating } />
        <MovieGenre handleChange={ this.handleChange } value={ genre } />
        <MovieButtonAdd />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: propTypes.func.isRequired,
// };

export default AddMovie;
