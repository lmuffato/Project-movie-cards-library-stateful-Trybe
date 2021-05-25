import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingComponent from './RatingComponent';

class AddMovie extends Component {
  constructor() {
    super();
    this.addTitle = this.addTitle.bind(this);
    this.addSubtitle = this.addSubtitle.bind(this);
    this.addImage = this.addImage.bind(this);
    this.addStoryline = this.addStoryline.bind(this);
    this.addRating = this.addRating.bind(this);

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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.addTitle } />
        <Subtitle value={ subtitle } onChange={ this.addSubtitle } />
        <ImagePath value={ imagePath } onChange={ this.addImage } />
        <Storyline value={ storyline } onChange={ this.addStoryline } />
        <RatingComponent value={ rating } onChange={ this.addRating } />

        <label htmlFor="genre-input" data-testid="genre-input-label">
          <select value={ genre } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
