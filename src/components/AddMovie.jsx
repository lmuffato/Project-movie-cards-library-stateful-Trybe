import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleValue = this.handleValue.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label
          data-testid="title-input-label"
          htmlFor="title"
        >
          Título
          <input
            name="title"
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleValue }
          />
        </label>
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            id="subtitle"
            onChange={ this.handleValue }
            value={ subtitle }
          />
        </label>
        <h1>
          {subtitle}
          {imagePath}
          {storyline}
          {rating}
          {genre}
        </h1>

      </form>
    );
  }
}

export default AddMovie;
