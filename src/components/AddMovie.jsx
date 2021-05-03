import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddMovieComponent from './addMovieComponent';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action'
    };
  }

  handle = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle,
      title,
      imagePath,
      //   storyline,
      //   rating,
    //   genre
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieComponent
          id="inputTtilte"
          value={ title }
          dataTestidlabel="title-input-label"
          dataTestidInput="title-input"
          onChenge={ this.handle }
          text="Título"
        />
        <AddMovieComponent
          id="inputSubTilte"
          value={ subtitle }
          dataTestidlabel="subtitle-input-label"
          dataTestidInput="subtitle-input"
          onChenge={ this.handle }
          text="Subtítulo"
        />
        <AddMovieComponent
          id="inputImage"
          value={ imagePath }
          dataTestidlabel="image-input-label"
          dataTestidInput="image-input"
          onChenge={ this.handle }
          text="Imagem"
        />
      </form>
    );
  }
}

export default AddMovie;
