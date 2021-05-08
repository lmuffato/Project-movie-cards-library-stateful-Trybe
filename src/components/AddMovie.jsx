// implement AddMovie component here
import React from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.newTitle = this.newTitle.bind(this);
    this.newSubtitle = this.newSubtitle.bind(this);
    this.newImagePath = this.newImagePath.bind(this);
    this.newRating = this.newRating.bind(this);
  }

  newTitle(event) {
    this.setState({ title: event.target.value });
  }

  newSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  newImagePath(event) {
    this.setState({ imagePath: event.taget.value });
  }

  newRating(event) {
    this.setState({ rating: event.target.value });
  }

  newGenre(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.newTitle } />
        <Subtitle value={ subtitle } onChange={ this.newSubtitle } />
        <ImagePath value={ imagePath } onChange={ this.newImagePath } />
      </form>
    );
  }
}
export default AddMovie;
