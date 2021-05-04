import React from 'react';
import LabelInput from './LabelInput';
import LabelTextArea from './LabelTextArea';

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.trocaTitle = this.trocaTitle.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  trocaTitle = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      title: value,
    }));
  }

  trocaSubTitle = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      subtitle: value,
    }));
  }

  trocaImage = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      imagePath: value,
    }));
  }

  trocaStoryline = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      storyline: value,
    }));
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelInput
          value={ title }
          id="title-input"
          type="text"
          text="Título"
          onChange={ this.trocaTitle }
        />

        <LabelInput
          id="subtitle-input"
          text="Subtítulo"
          type="text"
          onChange={ this.trocaSubTitle }
          value={ subtitle }
        />

        <LabelInput
          id="image-input"
          text="Imagem"
          type="text"
          onChange={ this.trocaImage }
          value={ imagePath }
        />

        <LabelTextArea
          id="storyline-input"
          text="Sinopse"
          onChange={ this.trocaStoryline }
          value={ storyline }
        />
      </form>
    );
  }
}

export default AddMovie;
