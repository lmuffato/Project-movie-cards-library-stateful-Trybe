import React from 'react';
// import PropTypes from 'prop-types';
import AddMoviesResto from './AddMoviesResto';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
    this.hendleChange = this.hendleChange.bind(this);
  }

  hendleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.hendleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.hendleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.hendleChange }
          />
        </label>
        <AddMoviesResto
          storyline={ storyline }
          genre={ genre }
          rating={ rating }
          hendleChange={ this.hendleChange }
        />
      </form>
    );
  }
}
// AddMovie.propTypes = {
// title: PropTypes.string.isRequired,
// };
export default AddMovie;
