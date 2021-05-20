import React from 'react';
import PropTypes from 'prop-types';
import Title from './movie/Title';
import SubTitle from './movie/Subtitle';
import Img from './movie/Img';
import Sinopse from './movie/Sinopse';
import Rating from './movie/Rating';
import Genre from './movie/Genre';

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

  addMovie = () => {
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
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleTitle={ this.handleTitle } />
        <SubTitle subtitle={ subtitle } handlesub={ this.handlesub } />
        <Img imagePath={ imagePath } handleimg={ this.handleimg } />
        <Sinopse storyLine={ storyLine } handleStory={ this.handleStory } />
        <Rating rating={ rating } handleRating={ this.handleRating } />
        <Genre genre={ genre } handleGenre={ this.handleGenre } />
        <button type="button" data-testid="send-button" onClick={ this.addMovie }>
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
