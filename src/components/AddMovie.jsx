import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import Select from './Select';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handler = this.handler.bind(this);
    this.defaultState = this.defaultState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handler({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  defaultState() {
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputLabel
          value={ title }
          name="title"
          tag="title"
          type="text"
          handler={ this.handler }
          description="Título"
        />
        <InputLabel
          value={ subtitle }
          name="subtitle"
          tag="subtitle"
          type="text"
          handler={ this.handler }
          description="Subtítulo"
        />
        <InputLabel
          value={ imagePath }
          name="imagePath"
          tag="image"
          type="text"
          handler={ this.handler }
          description="Imagem"
        />
        <InputLabel
          value={ storyline }
          name="storyline"
          tag="storyline"
          type="text"
          handler={ this.handler }
          description="Sinopse"
        />
        <InputLabel
          value={ rating }
          name="rating"
          tag="rating"
          type="number"
          handler={ this.handler }
          description="Avaliação"
        />
        <Select handler={ this.handler } genre={ genre } />
        <Button defaultState={ this.defaultState } onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: (event) => event.preventDefault(),
};

export default AddMovie;
