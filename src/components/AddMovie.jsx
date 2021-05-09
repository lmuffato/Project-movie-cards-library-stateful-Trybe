import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './movieForm/TitleInput';
import SubtitleInput from './movieForm/SubtitleInput';
import ImageInput from './movieForm/ImageInput';
import StorylineInput from './movieForm/StorylineInput';
import RatingInput from './movieForm/RatingInput';
import GenreInput from './movieForm/GenreInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } onChange={ this.handleChange } />
        <SubtitleInput
          subtitle={ subtitle }
          onChange={ this.handleChange }
        />
        <ImageInput
          imagePath={ imagePath }
          onChange={ this.handleChange }
        />
        <StorylineInput
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <RatingInput rating={ rating } onChange={ this.handleChange } />
        <GenreInput genre={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.handleSubmit();
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
