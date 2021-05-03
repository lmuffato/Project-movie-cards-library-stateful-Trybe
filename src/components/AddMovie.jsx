import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import ImagePath from './AddMovieComponents/ImagePath';
import Storyline from './AddMovieComponents/Storyline';
import Rating from './AddMovieComponents/Rating';
import Genre from './AddMovieComponents/Genre';
import Button from './AddMovieComponents/Button';

class AddMovie extends React.Component {
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

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleMovieState = () => {
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
    // Para ajuda do uso do destructuring para o state consultei o vídeo:
    // https://www.youtube.com/watch?v=5_PdMS9CLLI
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <Storyline storyline={ storyline } handleChange={ this.handleChange } />
        <Rating rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <Button handleMovieState={ this.handleMovieState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
