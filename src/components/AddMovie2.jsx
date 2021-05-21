import React, { Component } from 'react';
import { string, number, func, shape } from 'prop-types';

class AddMovie2 extends Component {
  render() {
    const { value, handleClick, handleChange } = this.props;
    const { genre, rating, storyline } = value;
    return (
      <>
        <label data-testid="storyline-input-label" htmlFor="sinop-name">
          Sinopse
          <textarea
            name="storyline"
            id="sinop-name"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="aval-name">
          Avaliação
          <input
            name="rating"
            id="aval-name"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="gen-name">
          Gênero
          <select
            name="genre"
            id="gen-name"
            data-testid="genre-input"
            value={ genre }
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ handleClick }
        >
          Adicionar filme
        </button>
      </>
    );
  }
}

AddMovie2.propTypes = {
  handleChange: func,
  handleClick: func,
  value: shape({
    storyline: string,
    genre: string,
    rating: number,
  }),
}.isRequired;

export default AddMovie2;
