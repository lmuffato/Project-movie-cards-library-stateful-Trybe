import React from 'react';
import PropTypes from 'prop-types';
import Title from './formTypes/Title';
import TextArea from './formTypes/TextArea';
import Subtitle from './formTypes/Subtitle';
import Image from './formTypes/Image';
import Rating from './formTypes/Rating';
import Select from './formTypes/Select';

class addMovie extends React.Component {
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

  changeTitle = (event) => {
    const { target: { value } } = event;
    this.setState(() => ({
      title: value,
    }));
  }

  changeSubtitle = (event) => {
    const { target: { value } } = event;
    this.setState(() => ({
      subtitle: value,
    }));
  }

  changeImage = (event) => {
    const { target: { value } } = event;
    this.setState(() => ({
      imagePath: value,
    }));
  }

  changeStoryline = (event) => {
    const { target: { value } } = event;
    this.setState(() => ({
      storyline: value,
    }));
  }

  changeRating = (event) => {
    const { target: { value } } = event;
    this.setState(() => ({
      rating: value,
    }));
  }

  changeGenre = (event) => {
    const { target: { value } } = event;
    this.setState(() => ({
      genre: value,
    }));
  }

  addMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleProps = () => {
    const { title } = this.state;
    return ({
      id: 'title-input',
      value: title,
      onChange: this.changeTitle,
      labelText: 'Título',
    });
  }

  subtitleProps = () => {
    const { subtitle } = this.state;
    return ({
      id: 'subtitle-input',
      value: subtitle,
      onChange: this.changeSubtitle,
      labelText: 'Subtítulo',
    });
  }

  imageProps = () => {
    const { imagePath } = this.state;
    return ({
      id: 'image-input',
      value: imagePath,
      onChange: this.changeImage,
      labelText: 'Imagem',
    });
  }

  textAreaProps = () => {
    const { storyline } = this.state;
    return ({
      id: 'storyline-input',
      value: storyline,
      onChange: this.changeStoryline,
      labelText: 'Sinopse',
    });
  }

  ratingProps = () => {
    const { rating } = this.state;
    return ({
      id: 'rating-input',
      value: rating,
      onChange: this.changeRating,
      labelText: 'Avaliação',
    });
  }

  selectProps = () => {
    const { genre } = this.state;
    const optionid = 'genre-option';
    return ({
      id: 'genre-input',
      value: genre,
      onChange: this.changeGenre,
      options: [
        { id: optionid, value: 'action', text: 'Ação' },
        { id: optionid, value: 'comedy', text: 'Comédia' },
        { id: optionid, value: 'thriller', text: 'Suspense' },
      ],
      labelText: 'Gênero',
    });
  }

  render = () => (
    <form data-testid="add-movie-form">
      <Title { ...this.titleProps() } />
      <Subtitle { ...this.subtitleProps() } />
      <Image { ...this.imageProps() } />
      <TextArea { ...this.textAreaProps() } />
      <Rating { ...this.ratingProps() } />
      <Select { ...this.selectProps() } />
      <button type="button" onClick={ this.addMovie } data-testid="send-button">
        Adicionar filme
      </button>
    </form>
  )
}

addMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default addMovie;
