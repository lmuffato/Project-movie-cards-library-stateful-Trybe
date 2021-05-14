// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange = (({ target }) => {
    const { key, value } = target;
    this.setState({
      [key]: value,
    });
  });

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input defaultValue={ title }
            data-testid="title-input"
            type="text"
            id="inputTitle"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="inputSub">
          Subtítulo
          <input defaultValue={ subtitle }
            data-testid="subtitle-input"
            type="text"
            id="inputSub"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
