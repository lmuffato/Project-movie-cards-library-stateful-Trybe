import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div value={ onClick }>
        <form data-testid="add-movie-form">
          <TitleInput title={ title } handleChange={ this.handleChange } />
          <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
          <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
          <StorylineInput storyline={ storyline } handleChange={ this.handleChange } />
          <RatingInput rating={ rating } handleChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
