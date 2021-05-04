import React from 'react';
import InputAddMovie from './InputAddMovie';
import InputNumber from './InputNumber';
import TextAreaAddMovie from './TextAreaAddMovie';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    //   genre: 'action',
    };
  }

  handleTextChange(e) {
    console.log('Mudanca ocorrida');
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputAddMovie
            label="Título"
            testIdLabel="title-input-label"
            testIdInput="title-input"
            inputValue={ title }
            handle={ this.handleTextChange }
            inputName="title"
          />
          <InputAddMovie
            label="Subtítulo"
            testIdLabel="subtitle-input-label"
            testIdInput="subtitle-input"
            inputValue={ subtitle }
            handle={ this.handleTextChange }
            inputName="subtitle"
          />
          <InputAddMovie
            label="Imagem"
            testIdLabel="image-input-label"
            testIdInput="image-input"
            inputValue={ imagePath }
            handle={ this.handleTextChange }
            inputName="imagePath"
          />
          <TextAreaAddMovie
            label="Sinopse"
            testIdLabel="storyline-input-label"
            testIdInput="storyline-input"
            inputValue={ storyline }
            handle={ this.handleTextChange }
            tAreaName="storyline"
          />
          <InputNumber
            label="Avaliação"
            testIdLabel="rating-input-label"
            testIdInput="rating-input"
            inputValue={ rating }
            handle={ this.handleTextChange }
            inputName="rating"
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
