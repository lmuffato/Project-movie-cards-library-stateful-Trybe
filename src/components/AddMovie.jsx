import React from 'react';
import AddMovieInput from './AddMovieInput';
import AddMovieSelect from './AddMovieSelect';
import AddMovieTextArea from './AddMovieTextArea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleImagePath = this.handleImagePath.bind(this);
    this.handleStoryline = this.handleStoryline.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    const { value } = event.target;
    this.setState({ genre: value });
  }

  handleRating(event) {
    const { value } = event.target;
    this.setState({ rating: value });
  }

  handleImagePath(event) {
    const { value } = event.target;
    this.setState({ imagePath: value });
  }

  handleSubtitle(event) {
    const { value } = event.target;
    this.setState({ subtitle: value });
  }

  handleTitle(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleStoryline(event) {
    const { value } = event.target;
    this.setState({ storyline: value });
  }

  render() {
    const {
      title, subtitle, imagePath,
      storyline, rating, genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMovieInput
          getData={ title }
          method={ this.handleTitle }
          whatData="title"
          text="Título"
        />
        <AddMovieInput
          getData={ subtitle }
          method={ this.handleSubtitle }
          whatData="subtitle"
          text="Subtítulo"
        />
        <AddMovieInput
          getData={ imagePath }
          method={ this.handleImagePath }
          whatData="image"
          text="Imagem"
        />
        <AddMovieInput
          getData={ rating }
          method={ this.handleRating }
          whatData="rating"
          text="Avaliação"
          type="number"
        />
        <AddMovieTextArea
          storyline={ storyline }
          method={ this.handleStoryline }
        />
        <AddMovieSelect
          genre={ genre }
          method={ this.handleSelect }
        />
      </form>
    );
  }
}

export default AddMovie;
