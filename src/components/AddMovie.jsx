// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import MovieTitle from './MovieComponents/MovieTitle';
import MovieSubtitle from './MovieComponents/MovieSubtitle';
import MovieImage from './MovieComponents/MovieImage';
import MovieStoryLine from './MovieComponents/MovieStoryline';
import MovieRating from './MovieComponents/MovieRating';
import MovieGenre from './MovieComponents/MovieGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.onClick = this.onClick.bind(this);
    this.resetState = this.resetState.bind(this);

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

  resetState() {
    // ev.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <MovieTitle handleChange={ this.handleChange } value={ title } />
        <MovieSubtitle handleChange={ this.handleChange } value={ subtitle } />
        <MovieImage handleChange={ this.handleChange } value={ imagePath } />
        <MovieStoryLine handleChange={ this.handleChange } value={ storyLine } />
        <MovieRating handleChange={ this.handleChange } value={ rating } />
        <MovieGenre handleChange={ this.handleChange } value={ genre } />

        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => {
            onClick();
            this.resetState();
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
