// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieTitle';
import SubTitle from './AddMovieSubtitle';
import ImagePath from './AddMovieImagePath';
import StoryLine from './AddMovieStoryline';
import Rating from './AddMovieRating';
import Genre from './AddMovieGenre';
import Button from './AddMovieButton';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleInputs = this.handleInputs.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.buttonEvent = this.buttonEvent.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetStates() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  buttonEvent(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.resetStates();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleInputs={ this.handleInputs } />
        <SubTitle subtitle={ subtitle } handleInputs={ this.handleInputs } />
        <ImagePath imagePath={ imagePath } handleInputs={ this.handleInputs } />
        <StoryLine storyline={ storyline } handleInputs={ this.handleInputs } />
        <Rating rating={ rating } handleInputs={ this.handleInputs } />
        <Genre genre={ genre } handleInputs={ this.handleInputs } />
        <Button buttonEvent={ this.buttonEvent } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: undefined,
};

export default AddMovie;
