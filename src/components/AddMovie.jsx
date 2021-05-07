// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleSubtitle from './addMovieInputs/TitleSubtitle';
import ImageStory from './addMovieInputs/ImageStory';
import RatinArea from './addMovieInputs/RatinArea';
import SelectGenre from './addMovieInputs/SelectGenre';

class AddMovie extends React.Component {
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
    this.handleSub = this.handleSub.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleRat = this.handleRat.bind(this);
    this.handleSto = this.handleSto.bind(this);
    this.handleGen = this.handleGen.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
    console.log(event.target.value);
  }

  handleSub(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleImg(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleSto(event) {
    this.setState({ storyline: event.target.value });
  }

  handleRat(event) {
    this.setState({ rating: event.target.value });
  }

  handleGen(event) {
    this.setState({ genre: event.target.value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
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
        <TitleSubtitle
          title={ title }
          handleChange={ this.handleChange }
          subtitle={ subtitle }
          handleSub={ this.handleSub }
        />
        <ImageStory
          imagePath={ imagePath }
          handleImg={ this.handleImg }
        />
        <RatinArea
          rating={ rating }
          handleRat={ this.handleRat }
          storyline={ storyline }
          handleSto={ this.handleSto }
        />
        <SelectGenre
          genre={ genre }
          handleGen={ this.handleGen }
          addMovie={ this.addMovie }
        />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
