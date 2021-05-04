// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import ImagePath from './AddMovie/ImagePath';
import Storyline from './AddMovie/Storyline';
import Rating from './AddMovie/Rating';
import Genre from './AddMovie/Genre';

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

  AddMovies = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } AddMovie={ this.AddMovies } />
          <Subtitle subtitle={ subtitle } AddMovie={ this.AddMovies } />
          <ImagePath imagePath={ imagePath } AddMovie={ this.AddMovies } />
          <Storyline storyline={ storyline } AddMovie={ this.AddMovies } />
          <Rating rating={ rating } AddMovie={ this.AddMovies } />
          <Genre genre={ genre } AddMovie={ this.AddMovies } />
          <button type="submit">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
