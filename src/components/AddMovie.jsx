import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Imagem';
import Storyline from './Storyline';
import Rating from './Rating';
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

  upDateCallback({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  callback() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.upDateCallback } />
        <Subtitle title={ subtitle } onChange={ this.upDateCallback } />
        <Image title={ imagePath } onChange={ this.upDateCallback } />
        <Storyline title={ storyline } onChange={ this.upDateCallback } />
        <Rating title={ rating } onChange={ this.upDateCallback } />
        <Genre title={ genre } onChange={ this.upDateCallback } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => {
            onClick(this.state);
            this.upDateCallback();
          } }
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
