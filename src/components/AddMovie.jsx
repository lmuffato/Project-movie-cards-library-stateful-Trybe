import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';
import RatingInput from './RatingInput';
import Genero from './Genero';
import SendButton from './SendButton';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValue({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  clickButton() {
    const { onClick } = this.props;
    onClick(this.state);
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.setState({ ...initialState });
  }

  render() {
    const {
      subtitle, title, imagePath,
      storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Titulo changeValue={ this.changeValue } title={ title } />
        <Subtitulo changeValue={ this.changeValue } subtitle={ subtitle } />
        <Imagem changeValue={ this.changeValue } imagePath={ imagePath } />
        <Sinopse changeValue={ this.changeValue } storyline={ storyline } />
        <RatingInput changeValue={ this.changeValue } rating={ rating } />
        <Genero changeValue={ this.changeValue } genre={ genre } />
        <SendButton changeValueByClick={ this.clickButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
