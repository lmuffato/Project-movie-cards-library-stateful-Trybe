// implement AddMovie component here
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

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handlesub = (event) => {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitle }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handlesub }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;

