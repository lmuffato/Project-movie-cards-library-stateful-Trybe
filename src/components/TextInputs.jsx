import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';

class TextInputs extends React.Component {
  render() {
    const { subtitle, title, imagePath, storyline, rating, handler } = this.props;
    return (
      <div>
        <InputLabel
          value={ title }
          name="title"
          tag="title"
          type="text"
          handler={ handler }
          description="Título"
        />
        <InputLabel
          value={ subtitle }
          name="subtitle"
          tag="subtitle"
          type="text"
          handler={ handler }
          description="Subtítulo"
        />
        <InputLabel
          value={ imagePath }
          name="imagePath"
          tag="image"
          type="text"
          handler={ handler }
          description="Imagem"
        />
        <InputLabel
          value={ storyline }
          name="storyline"
          tag="storyline"
          type="text"
          handler={ handler }
          description="Sinopse"
        />
        <InputLabel
          value={ rating }
          name="rating"
          tag="rating"
          type="number"
          handler={ handler }
          description="Avaliação"
        />
      </div>
    );
  }
}

TextInputs.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handler: PropTypes.func.isRequired,
};

export default TextInputs;
