import React from 'react';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  changeValue({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      subtitle, title, imagePath,
      storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo changeValue={ this.changeValue } title={ title } />
        <Subtitulo changeValue={ this.changeValue } subtitle={ subtitle } />
        <Imagem changeValue={ this.changeValue } imagePath={ imagePath } />
        <Sinopse changeValue={ this.changeValue } storyline={ storyline } />
        <RatingInput changeValue={ this.changeValue } rating={ rating } />

      </form>
    );
  }
}

export default AddMovie;
