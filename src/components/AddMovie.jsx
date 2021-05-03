import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieComponent from './addMovieComponent';
import AddRating from './AddRating';
import Select from './addSelect';
import Button from './button';

class AddMovie extends Component {
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

  handle = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const keys = Object.keys(this.state);
    keys.forEach((element) => {
      if (element === 'rating') {
        this.setState({
          [element]: 0,
        });
      }
      this.setState({
        [element]: '',
      });
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieComponent
          name="title"
          value={ title }
          dataTestidlabel="title-input-label"
          dataTestidInput="title-input"
          onChange={ this.handle }
          text="Título"
        />
        <AddMovieComponent
          name="subtitle"
          value={ subtitle }
          dataTestidlabel="subtitle-input-label"
          dataTestidInput="subtitle-input"
          onChange={ this.handle }
          text="Subtítulo"
        />
        <AddMovieComponent
          name="imagePath"
          value={ imagePath }
          dataTestidlabel="image-input-label"
          dataTestidInput="image-input"
          onChange={ this.handle }
          text="Imagem"
        />
        <AddMovieComponent
          name="storyline"
          value={ storyline }
          dataTestidlabel="storyline-input-label"
          dataTestidInput="storyline-input"
          onChange={ this.handle }
          text="Sinopse"
        />
        <AddRating value={ rating } onChange={ this.handle } />
        <Select value={ genre } onChange={ this.handle } />
        <Button state={ this.state } onClick={ onClick } handle={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
