// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie/Title';
import SubTitle from './AddMovie/Subtitle';
import Img from './AddMovie/Img';
import Sinopse from './AddMovie/Sinopse';
import Rating from './AddMovie/Rating';
import Genre from './AddMovie/Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handlesub = (event) => {
    this.setState({ subtitle: event.target.value });
  }

  handleimg = (event) => {
    this.setState({ imagePath: event.target.value });
  }

  handleStory = (event) => {
    this.setState({ storyLine: event.target.value });
  }

  handleRating = (event) => {
    this.setState({ rating: event.target.value });
  }

  handleGenre = (event) => {
    this.setState({ genre: event.target.value });
  }

  addMovie = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleTitle={ this.handleTitle } />
        <SubTitle subtitle={ subtitle } handlesub={ this.handlesub } />
        <Img imagePath={ imagePath } handleimg={ this.handleimg } />
        <Sinopse storyLine={ storyLine } handleStory={ this.handleStory } />
        <Rating rating={ rating } handleRating={ this.handleRating } />
        <Genre genre={ genre } handleGenre={ this.handleGenre } />
        <button type="submit" data-testid="send-button" onClick={ this.addMovie }>
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
