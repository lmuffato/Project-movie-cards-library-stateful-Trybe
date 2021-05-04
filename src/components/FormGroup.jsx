import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormGroup extends Component {
  render() {
    const { state } = this.props;
    const { title, subtitle, imagePath, storyLine } = state;
    const { handleChange } = this.props;

    return (
      <>
        <label htmlFor="name" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="storyLine" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyLine"
            data-testid="storyline-input"
            value={ storyLine }
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

FormGroup.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyLine: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormGroup;
