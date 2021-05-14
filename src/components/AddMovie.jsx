// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'teste',
      titleInput: '',
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
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputText">
          Título
          <input
            data-testid="title-input"
            type="text"
            id="inputText"
            // value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
