import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import TextArea from './TextArea';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleButtonClick(fn) {
    fn(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderSelect(genre) {
    const selectOptions = [
      { value: 'action', name: 'Ação' },
      { value: 'comedy', name: 'Comédia' },
      { value: 'thriller', name: 'Suspense' },
    ];

    return (
      <SelectInput
        options={ selectOptions }
        value={ genre }
        onChange={ this.handleInputChange }
        selectTestID="genre-input"
        labelTestID="genre-input-label"
        optionTestID="genre-option"
        name="genre"
        label="Gênero"
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TextInput
          value={ title }
          onChange={ this.handleInputChange }
          label="Título"
          testLabelID="title-input-label"
          testInputID="title-input"
          name="title"
        />
        <TextInput
          value={ subtitle }
          onChange={ this.handleInputChange }
          label="Subtítulo"
          testLabelID="subtitle-input-label"
          testInputID="subtitle-input"
          name="subtitle"
        />
        <TextInput
          value={ imagePath }
          onChange={ this.handleInputChange }
          label="Imagem"
          testLabelID="image-input-label"
          testInputID="image-input"
          name="imagePath"
        />
        <TextArea value={ storyline } onChange={ this.handleInputChange } />
        <NumberInput value={ rating } onChange={ this.handleInputChange } />

        {this.renderSelect(genre)}

        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleButtonClick(onClick) }
        >
          Adicionar filme

        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
