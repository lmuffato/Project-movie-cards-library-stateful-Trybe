// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value })
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">

          <label data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              data-testid="title-input"
              value={this.state.title}
              onChange={this.handleChange} />
          </label>

          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              data-testid="subtitle-input"
              value={this.state.subtitle}
              onChange={this.handleChange} />
          </label>

          <label data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              data-testid="image-input"
              value={this.state.imagePath}
              onChange={this.handleChange} />
          </label>

          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleChange} />
          </label>

          <label data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              data-testid="rating-input"
              value={this.state.rating}
              onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
