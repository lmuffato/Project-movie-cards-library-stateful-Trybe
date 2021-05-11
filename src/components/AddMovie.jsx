import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './movieComponents/TitleInput';
import SubtitleInput from './movieComponents/SubtitleInput';
import ImagePath from './movieComponents/ImagePathInput';
import StoryLine from './movieComponents/StorylineInput';
import RatingInput from './movieComponents/RatingInput';
import GenreInput from './movieComponents/GenreInput';

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
