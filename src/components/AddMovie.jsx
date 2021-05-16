import React from 'react';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <br />
          <input type="text" title="" data-testid="title-input" id="title" />
        </label>
        <br />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <br />
          <input type="text" subtitle="" data-testid="subtitle-input" id="subtitle" />
        </label>
        <br />
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <br />
          <input type="text" imagePath="" data-testid="image-input" id="image" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
