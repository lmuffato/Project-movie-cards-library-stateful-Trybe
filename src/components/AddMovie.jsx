// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Title from './Title';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Rating from './RatingInput';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.newTitle = this.newTitle.bind(this);
    this.newSubtitle = this.newSubtitle.bind(this);
    this.newImagePath = this.newImagePath.bind(this);
    this.newStoryline = this.newStoryline.bind(this);
    this.newRating = this.newRating.bind(this);
    this.newGenre = this.newGenre.bind(this);
    this.sendButton = this.sendButton.bind(this);
  }

  newTitle(event) {
    this.setState({ title: event.target.value });
  }

  newSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  newImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  newStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  newRating(event) {
    this.setState({ rating: event.target.value });
  }

  newGenre(event) {
    this.setState({ genre: event.target.value });
  }

  sendButton(event) {
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
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.newTitle } />
        <Subtitle value={ subtitle } onChange={ this.newSubtitle } />
        <ImagePath value={ imagePath } onChange={ this.newImagePath } />
        <Storyline value={ storyline } onChange={ this.newStoryline } />
        <Rating value={ Number(rating) } onChange={ this.newRating } />
        <Genre value={ genre } onChange={ this.newGenre } />
        <button type="button" data-testid="send-button" onClick={ this.sendButton }>
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
