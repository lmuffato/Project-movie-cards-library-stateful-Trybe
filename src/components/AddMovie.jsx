import React from 'react';
import PropTypes from 'prop-types';
import GenreOption from './AddMovieComponents/GenreOption';
import Input from './AddMovieComponents/Inputs';
import TextArea from './AddMovieComponents/TextArea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeHandle = this.changeHandle.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeHandle({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { newMovieCreator } = this.props;
    const { genre, rating, storyline, imagePath, subtitle, title } = this.state;
    const titleInput = {
      datatestid: 'title-input-label',
      datatestidinput: 'title-input',
      name: 'title',
      info: 'Título',
    };
    const subtitleInput = {
      datatestid: 'subtitle-input-label',
      datatestidinput: 'subtitle-input',
      name: 'subtitle',
      info: 'Subtítulo',
    };
    const imageInput = {
      datatestid: 'image-input-label',
      datatestidinput: 'image-input',
      name: 'imagePath',
      info: 'Imagem',
    };
    const ratingInput = {
      datatestid: 'rating-input-label',
      datatestidinput: 'rating-input',
      type: 'number',
      name: 'rating',
      info: 'Avaliação',
    };
    const storyLine = {
      datatestid: 'storyline-input-label',
      datatestidinput: 'storyline-input',
      name: 'storyline',
      info: 'Sinopse',
    };
    return (
      <form data-testid="add-movie-form">
        <Input { ...titleInput } change={ this.changeHandle } value={ title } />
        <Input { ...subtitleInput } change={ this.changeHandle } value={ subtitle } />
        <Input { ...imageInput } change={ this.changeHandle } value={ imagePath } />
        <TextArea { ...storyLine } change={ this.changeHandle } value={ storyline } />
        <Input { ...ratingInput } change={ this.changeHandle } value={ rating } />
        <GenreOption change={ this.changeHandle } genre={ genre } />
        <button type="submit" onClick={ newMovieCreator } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  title: PropTypes.string,
  genre: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  newMovieCreator: PropTypes.func,
};

AddMovie.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  newMovieCreator: PropTypes.func,
};

export default AddMovie;
