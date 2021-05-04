// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <label htmlFor="text-input" data-testid="text-input-label">
            <input
              id="text-input"
              data-testid="title-input-label"
              value={ title }
              name="title"
              onChange={ this.AddMovies }
            />
            Título:
          </label>
          <label
            htmlFor="checkbox-input"
            data-testid="checkbox-input-label"
          >
            <input
              checked={ bookmarkedOnly }
              id="checkbox-input"
              data-testid="checkbox-input"
              onChange={ this.AddMovies }
            />
            Mostrar somente favoritos
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,

};

export default AddMovie;
