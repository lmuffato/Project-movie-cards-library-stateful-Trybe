import React from 'react';

 class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  const {onClick} this.props;
  
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              data-testid="title-input"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              data-testid="subtitle-input"
              onChange={ this.handleChange }
              value={ subtitle }
            />
          </label>
          <label data-testid="image-input-label">
          Imagem
            <input
              name="imagePath"
              type="text"
              data-testid="image-input"
              onChange={ this.handleChange }
              value={ imagePath }
            />
          </label>
          <label data-testid="storyline-input-label">
          Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              onChange={ this.handleChange }
              value={ storyline }
            />
          </label>
          <label data-testid="rating-input-label">
          Avaliação
            <input
              name="rating"
              type="number"
              data-testid="rating-input"
              onChange={ this.handleChange }
              value={ rating }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
