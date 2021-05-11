import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
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
    const { storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline"
            cols="40"
            rows="4"
            value={ storyline }
            onChange={ this.hendleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.hendleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Imagem
          <input
            type="text"
            id="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.hendleChange }
          />
        </label>
      </form>
    );
  }
}
// AddMovie.propTypes = {
// title: PropTypes.string.isRequired,
// };
export default AddMovie;
