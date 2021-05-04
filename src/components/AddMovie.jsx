import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    };
  }

  changeValue({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      subtitle, title, imagePath,
      storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" label data-testid="title-input-label">
          Título
          <input
            onChange={ this.changeValue }
            value={ title }
            data-testid="title-input"
            name="title"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            onChange={ this.changeValue }
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            onChange={ this.changeValue }
            value={ imagePath }
            data-testid="image-input"
            name="imagePath"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            onChange={ this.changeValue }
            value={ storyline }
            data-testid="storyline-input"
            name="storyline"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
