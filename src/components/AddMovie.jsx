import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

handleOnChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value });
}

render() {
  const { onClick } = this.props;
  return (
    <div>
      <form data-testid="add-movie-form">
        <label htmlFor="Título" data-testid="title-input-label">
          <input
            type="text"
            name="title"
            id="Título"
            value={ this.title }
            data-testid="title-input"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ this.subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="Imagem" data-testid="image-input-label">
          <input
            type="text"
            name="imagePath"
            id="Imagem"
            value={ this.imagePath }
            data-testid="image-input"
            onChange={ this.handleOnChange }
          />
        </label>
      </form>
    </div>
  );
}
}

export default AddMovie;
