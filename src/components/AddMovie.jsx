import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectGenre from './SelectGenre';
import Button from './Button';
import AddMovieText from './AddMovieText';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButtonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          type="text"
          labelTestId="title-input-label"
          label="Título"
          name="title"
          value={ title }
          testid="title-input"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          labelTestId="subtitle-input-label"
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          testid="subtitle-input"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          labelTestId="image-input-label"
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          testid="image-input"
          onChange={ this.handleChange }
        />
        <AddMovieText
          onChange={ this.handleChange }
          value={ storyLine }
        />
        <Input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
        <SelectGenre
          value={ genre }
          onChange={ this.handleChange }
        />
        <Button onClick={ this.handleButtonClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
