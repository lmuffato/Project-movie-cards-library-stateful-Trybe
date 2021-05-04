import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './AddMovie_Inputs/InputTitle';
import InputSubtitle from './AddMovie_Inputs/InputSubtitle';
import InputImage from './AddMovie_Inputs/InputImage';
import InputStoryline from './AddMovie_Inputs/InputStoryline';
import InputRating from './AddMovie_Inputs/InputRating';
import InputGenre from './AddMovie_Inputs/InputGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.btnClick = this.btnClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  btnClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" onSubmit={ this.btnClick }>
        <InputTitle
          onChange={ this.handleChange }
          value={ title }
        />
        <InputSubtitle
          onChange={ this.handleChange }
          value={ subtitle }
        />
        <InputImage
          onChange={ this.handleChange }
          value={ imagePath }
        />
        <InputStoryline
          onChange={ this.handleChange }
          value={ storyline }
        />
        <InputRating
          onChange={ this.handleChange }
          value={ rating }
        />
        <InputGenre
          onChange={ this.handleChange }
          value={ genre }
        />
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
