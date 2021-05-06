import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="input-title" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              onChange={ (this.handleChange) }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="input-subTitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ (this.handleChange) }
              data-testid="subtitle-input"
            />
          </label>
          <label htmlFor="input-img" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={ imagePath }
              onChange={ (this.handleChange) }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              type="text"
              name="stoyline"
              value={ storyline }
              onChange={ (this.handleChange) }
              data-testid="storyline-input"
            />
          </label>

        </form>
      </section>
    );
  }
}
