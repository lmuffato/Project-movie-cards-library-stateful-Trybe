import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingComponent from './RatingComponent';
import Genre from './Genre';

/* Este componente e tudo relacionado a ele, foi realizado junto com a colega Nathalia Zebral que dedicou de seu tempo para auxiliar na construção do conhecimento para realização deste. segue o pull request da colega... https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/55/files?file-filters%5B%5D=.jsx */

class AddMovie extends Component {
  constructor() {
    super();
    this.addTitle = this.addTitle.bind(this);
    this.addSubtitle = this.addSubtitle.bind(this);
    this.addImage = this.addImage.bind(this);
    this.addStoryline = this.addStoryline.bind(this);
    this.addRating = this.addRating.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.sendButton = this.sendButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
  }

  addTitle(event) {
    this.setState({ title: event.target.value });
  }

  addSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  addImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  addStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  addRating(event) {
    this.setState({ rating: event.target.value });
  }

  changeGenre(event) {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.addTitle } />
        <Subtitle value={ subtitle } onChange={ this.addSubtitle } />
        <ImagePath value={ imagePath } onChange={ this.addImage } />
        <Storyline value={ storyline } onChange={ this.addStoryline } />
        <RatingComponent value={ rating } onChange={ this.addRating } />
        <Genre value={ genre } onChange={ this.changeGenre } />
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
