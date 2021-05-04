// implement AddMovie component here
import React, { Component } from 'react';
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleInputs={ this.handleInputs } />
        <SubTitle subtitle={ subtitle } handleInputs={ this.handleInputs } />
        <ImagePath imagePath={ imagePath } handleInputs={ this.handleInputs } />
        <StoryLine storyline={ storyline } handleInput={ this.handleInputs } />
        <Rating rating={ rating } handleInput={ this.handleInputs } />
        <Genre genre={ genre } handleInput={ this.handleInputs } />
        <Button resetStates={ this.resetStates } />
      </form>
    );
  }
}

export default AddMovie;
