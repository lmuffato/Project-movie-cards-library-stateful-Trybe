// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

class AddMovie extends Component {
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

  resetStage = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            callback={ this.handleChange } testidLabel={ "title-input-label" }
            testidInput={ "title-input" } labelName={ 'Título' }
            name={ 'title' } value={ title }
          />

          <Input
            callback={ this.handleChange } testidLabel={ "subtitle-input-label" }
            testidInput={ "subtitle-input" } labelName={ 'Subtítulo' }
            name={ 'subtitle' } value={ subtitle }
          />

          <Input
            callback={ this.handleChange } testidLabel={ "image-input-label" }
            testidInput={ "image-input" } labelName={ 'Imagem' }
            name={ 'imagePath' } value={ imagePath }
          />

          <div>
            <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
              <textarea
                onChange={ this.handleChange }
                data-testid="storyline-input"
                value={ storyline }
                name="storyline"
                id="storyline"
                cols="30"
                rows="10"
              />
            </label>
          </div>

          <Input
            callback={ this.handleChange } testidLabel={ "rating-input-label" }
            testidInput={ "rating-input" } labelName={ 'Avaliação' }
            name={ 'rating' } value={ rating }
          />

          <Select
            callback={ this.handleChange } testidLabel={ "genre-input-label" }
            testidSelect={ "genre-input" } labelName={ 'Gênero' }
            name={ 'genre' } value={ genre }
          />
          <button data-testid="send-button" type="submit" onClick={ () => { onClick(); this.resetStage() }  }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

Input.propType = {
  callback: PropTypes.func,
  testidLabel: PropTypes.string,
  testidInput: PropTypes.string,
  labelName: PropTypes.string,
  name: PropTypes.string,
}

export default AddMovie;