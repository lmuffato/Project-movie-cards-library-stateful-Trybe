import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Imagem';
import Storyline from './Storyline';
import RatingInput from './RatingInput';
import Genre from './Genre';

class AddMovie extends React.Component {
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

    this.callback = this.callback.bind(this);
    this.upDateCallback = this.upDateCallback.bind(this);
  }

  callback(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    const initial = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState({
      ...initial,
    });
  }

  upDateCallback({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.upDateCallback } />
        <Subtitle title={ subtitle } onChange={ this.upDateCallback } />
        <Image title={ imagePath } onChange={ this.upDateCallback } />
        <Storyline title={ storyline } onChange={ this.upDateCallback } />
        <RatingInput title={ rating } onChange={ this.upDateCallback } />
        <Genre title={ genre } onChange={ this.upDateCallback } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.callback }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
