import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  handleValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  makeInput = (type, name, value, testId) => (
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ this.handleValue }
      data-testid={ testId }
      id={ testId }
    />
  );

  render() {
    // const {
    //   onClick,
    // } = this.props;

    const {
      title, subtitle, imagePath, storyline, rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          { this.makeInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          { this.makeInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          { this.makeInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleValue }
            data-testid="storyline-input"
            id="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          { this.makeInput('number', 'rating', rating, 'rating-input') }
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.string.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.string.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.string.isRequired,
// };
export default AddMovie;
