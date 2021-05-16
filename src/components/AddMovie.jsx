import React from 'react';

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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImagePathChange = this.handleImagePathChange.bind(this);
    this.handleStorylineChange = this.handleStorylineChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubtitleChange(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleImagePathChange(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleStorylineChange(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleRatingChange(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleGenreChange(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <br />
          <input value={ title } type="text" data-testid="title-input" id="title" onChange={ this.handleTitleChange } />
        </label>
        <br />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <br />
          <input value={ subtitle } type="text" data-testid="subtitle-input" id="subtitle" onChange={ this.handleSubtitleChange } />
        </label>
        <br />
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <br />
          <input value={ imagePath } type="text" data-testid="image-input" id="image" onChange={ this.handleImagePathChange } />
        </label>
        <br />
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <br />
          <textarea value={ storyline } type="text" data-testid="storyline-input" onChange={ this.handleStorylineChange } />
        </label>
        <br />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <br />
          <input value={ rating } type="number" data-testid="rating-input" id="rating" onChange={ this.handleRatingChange } />
        </label>
        <br />
      </form>
    );
  }
}

export default AddMovie;
