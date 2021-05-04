import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">

          <label
            data-testid="title-input-label"
            htmlFor="titleMovie"
          >
            Título
            <input
              data-testid="title-input"
              id="titleMovie"
              type="text"
              value={ title }
            />
          </label>
        </form>
        <button type="button"> adicionar Filme </button>
      </div>
    );
  }
}

export default AddMovie;
