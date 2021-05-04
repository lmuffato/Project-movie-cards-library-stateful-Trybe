import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovie/TextInput';
import SubtitleInput from './AddMovie/SubtitleInput';
import ImageInput from './AddMovie/ImageInput';
import StorylineInput from './AddMovie/StorylineInput';
import RatingInput from './AddMovie/RatingInput';
import GenderSelect from './AddMovie/GenderSelect';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubValue = (event) => {
    this.setState({ subtitle: event.target.value });
  };

  handleImage = (event) => {
    this.setState({ imagePath: event.target.value });
  };

  handleStory = (event) => {
    this.setState({ storyline: event.target.value });
  };

  handleRating = (event) => {
    this.setState({ rating: event.target.value });
  };

  handleGenre = (event) => {
    this.setState({ genre: event.target.value });
  }

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
      <form
        data-testid="add-movie-form"
        onSubmit={ this.addMovieToLibrary }
      >
        <TextInput title={ title } handleValue={ this.handleValue } />
        <SubtitleInput subtitle={ subtitle } handleSubValue={ this.handleSubValue } />
        <ImageInput imagePath={ imagePath } handleImage={ this.handleImage } />
        <StorylineInput storyline={ storyline } handleStory={ this.handleStory } />
        <RatingInput rating={ rating } handleRating={ this.handleRating } />
        <GenderSelect genre={ genre } handleGenre={ this.handleGenre } />
        <button
          type="submit"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

// Referências para a função AddMoviesToLibrary:
// ---> PR do colega João Nascimento
// https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/57/files
// --> Esta thread no slack: https://trybecourse.slack.com/archives/C01L16B9XC7/p1620082728499900
