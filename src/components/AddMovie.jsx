import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './movieComponents/titleInput';
import SubtitleInput from './movieComponents/subtitleInput';
import ImagePath from './movieComponents/imagePathInput';
import StoryLine from './movieComponents/storylineInput';
import RatingInput from './movieComponents/ratingInput';
import GenreInput from './movieComponents/genreInput';

const initialSatate = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = initialSatate;
  }

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
    this.setState(initialSatate);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <>
        <form data-testid="add-movie-form">
          <TitleInput value={ title } changes={ this.handleChanges } />
          <SubtitleInput value={ subtitle } changes={ this.handleChanges } />
          <ImagePath value={ imagePath } changes={ this.handleChanges } />
          <StoryLine value={ storyline } changes={ this.handleChanges } />
          <RatingInput value={ rating } changes={ this.handleChanges } />
          <GenreInput value={ genre } changes={ this.handleChanges } />
        </form>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
