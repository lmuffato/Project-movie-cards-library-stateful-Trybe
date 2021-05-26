import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvaliatorInput from './AvaliatorInput';
import ButtonAddMovie from './ButtonAddMovie';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import SynopsisInput from './SynopsisInput';
import GenderInput from './GenderInput';
import ImageInput from './ImageInput';

// Realizado este arquivo e demais importados com ajuda do nosso colega Guilherme Dornelles

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  handleReset = () => {
    console.log(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  eventClick= (event) => {
    event.preventDefault();
    this.handleReset();
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput
          value={ title }
          name="title"
          handleChange={ this.handleChange }
        />
        <SubtitleInput
          value={ subtitle }
          name="subtitle"
          handleChange={ this.handleChange }
        />
        <ImageInput
          value={ imagePath }
          name="imagePath"
          handleChange={ this.handleChange }
        />
        <SynopsisInput
          value={ storyline }
          name="storyline"
          handleChange={ this.handleChange }
        />
        <AvaliatorInput
          value={ rating }
          name="rating"
          handleChange={ this.handleChange }
        />
        <GenderInput
          value={ genre }
          name="genre"
          handleChange={ this.handleChange }
        />
        <ButtonAddMovie onClick={ this.eventClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
