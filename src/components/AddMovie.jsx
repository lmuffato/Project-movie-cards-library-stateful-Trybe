// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import ImagePath from './AddMovie/ImagePath';
import Storyline from './AddMovie/Storyline';
import Rating from './AddMovie/Rating';
import Genre from './AddMovie/Genre';
import Button from './AddMovie/Button';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  AddMovies = (event) => {
    // event.preventDefault();
    const { name, checked, value } = event.target;
    const values = event.target.type === 'checkbox'
      ? checked
      : value;
    this.setState({ [name]: values });
  }
  // esssa função onCLick fiz baseado nas dicas da Ana Ventura e Elisa França e por consultas nas PR do João Nascimento e Ana Ventura

  addMovieToLibrary = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form className="add-movie-form" data-testid="add-movie-form">
          <Title title={ title } AddMovie={ this.AddMovies } />
          <Subtitle subtitle={ subtitle } AddMovie={ this.AddMovies } />
          <ImagePath imagePath={ imagePath } AddMovie={ this.AddMovies } />
          <Storyline storyline={ storyline } AddMovie={ this.AddMovies } />
          <Rating rating={ rating } AddMovie={ this.AddMovies } />
          <Genre genre={ genre } AddMovie={ this.AddMovies } />
          <Button onClick={ this.addMovieToLibrary } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
