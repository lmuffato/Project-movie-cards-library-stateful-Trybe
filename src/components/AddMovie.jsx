import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  spamTitle = (title) => (
    <label htmlFor="label1" data-testid="title-input-label">
      Título
      <input
        type="text"
        id="label1"
        name="title"
        data-testid="title-input"
        value={ title }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamSubtitle = (subtitle) => (
    <label htmlFor="label2" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        id="label2"
        name="subtitle"
        data-testid="subtitle-input"
        value={ subtitle }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamImagePath = (imagePath) => (
    <label htmlFor="label3" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        id="label3"
        name="imagePath"
        data-testid="image-input"
        value={ imagePath }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamStoryline = (storyline) => (
    <label htmlFor="label4" data-testid="storyline-input-label">
      Sinopse
      <input
        type="textarea"
        id="label4"
        name="storyline"
        data-testid="storyline-input"
        value={ storyline }
        onChange={ this.handleChange }
      />
    </label>
  )

  render() {
    const { onClick, callback } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.spamTitle(title)}
        {this.spamSubtitle(subtitle)}
        {this.spamImagePath(imagePath)}
        {this.spamStoryline(storyline)}
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: null,
  callback: null,
};

export default AddMovie;
