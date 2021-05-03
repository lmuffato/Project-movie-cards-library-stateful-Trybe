import React from 'react';
import TextInput from './AddMovie/TextInput';
import SubtitleInput from './AddMovie/SubtitleInput';
import ImageInput from './AddMovie/ImageInput';
import StorylineInput from './AddMovie/StorylineInput';
import RatingInput from './AddMovie/RatingInput';
import GenderSelect from './AddMovie/GenderSelect';

class AddMovie extends React.Component {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput title={ title } handleValue={ this.handleValue } />
        <SubtitleInput subtitle={ subtitle } handleSubValue={ this.handleSubValue } />
        <ImageInput imagePath={ imagePath } handleImage={ this.handleImage } />
        <StorylineInput storyline={ storyline } handleStory={ this.handleStory } />
        <RatingInput rating={ rating } handleRating={ this.handleRating } />
        <GenderSelect genre={ genre } handleGenre={ this.handleGenre } />
        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  // PropTypes.shape(
  // subtitle: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
  // )
};
