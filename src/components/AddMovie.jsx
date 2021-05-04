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
      rating: 0,
      genre: 'action',
    };
  }

  changeValue({ target }) {
    this.setState({
      title: target.value,
    });
  }

  render() {
    const {
      subtitle, title, imagePath,
      storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" label data-testid="title-input-label">
          Título
          <input
            onChange={ this.changeValue }
            value={ title }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
