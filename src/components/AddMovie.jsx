import React, { Component } from 'react';
import InputImage from './InputImage';
import InputName from './InputName';
import InputStoryline from './InputStoryline';
import InputSubtitle from './InputSubtitle';

export default class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputName title={ title } handleChange={ this.handleChange } />
          <InputSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
          <InputImage imagePath={ imagePath } handleChange={ this.handleChange } />
          <InputStoryline storyline={ storyline } handleChange={ this.handleChange } />
          <label data-testid="rating-input-label" htmlFor="rating">
            Rating
            <input
              type="number"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero:
            <select
              value={ genre }
              data-testid="genre-input"
              id="genre"
              onChange={ this.handleChange }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            type="submit"
            onClick={ this.handlerClick }
          >
            Adiciona Filme
          </button>
        </form>
      </div>
    );
  }
}
