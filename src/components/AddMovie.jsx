import React, { Component } from 'react';
import PropTypes from 'prop-types';
import event from '@testing-library/user-event';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.changeStateValue = this.changeStateValue.bind(this);
  }

  changeStateValue(e, nameState) {
    this.setState({
      [nameState]: e.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form action="#" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            value={ title }
            onChange={ (e) => this.changeStateValue(e, 'title') }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={ subtitle }
            onChange={ (e) => this.changeStateValue(e, 'subtitle') }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image"
            value={ imagePath }
            onChange={ (e) => this.changeStateValue(e, 'imagePath') }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            onChange={ (e) => this.changeStateValue(e, 'storyline') }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating"
            value={ rating }
            onChange={ (e) => this.changeStateValue(e, 'rating') }
            data-testid="rating-input"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
