import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // //     rating: 0,
      // //     genre: 'action',
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  handleUpdateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  renderInputs(name, value, type, data) {
    return (
      <input
        type={ type }
        data-testid={ data }
        id={ data }
        name={ name }
        value={ value }
        onChange={ this.handleUpdateState }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.renderInputs('title', title, 'text', 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.renderInputs('subtitle', subtitle, 'text', 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          { this.renderInputs('imagePath', imagePath, 'text', 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          { this.renderInputs('storyline', storyline, 'textarea', 'storyline-input') }
        </label>
      </form>
    );
  }
}

export default AddMovie;
