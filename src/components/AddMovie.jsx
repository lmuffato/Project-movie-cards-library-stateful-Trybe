import React from 'react';
import Inputs from './InputsText';
import Select from './Select';

export default class AddMovie extends React.Component {
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
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    console.log(rating);

    return (
      <form action="" data-testid="add-movie-form">
        <Inputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <Select genre={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}
