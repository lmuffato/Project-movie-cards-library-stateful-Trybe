import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      // rating: '',
      // genre: '',
    };
  }

  handleValue = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubValue = (event) => {
    this.setState({ subtitle: event.target.value });
  };

  handleImage = (event) => {
    this.setState({ imagePath: event.target.value });
  };

  handleStory = (event) => {
    this.setState({ storyline: event.target.value });
  };

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="input-text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleValue }
          />
        </label>
        <label htmlFor="input-sub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="input-sub"
            value={ subtitle }
            onChange={ this.handleSubValue }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="input-img" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="input-img"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleImage }
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="sinopse"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleStory }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  // PropTypes.shape(
  // subtitle: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
  // )
};
