import React from 'react';
import PropTypes from 'prop-types';
import AddMovie2 from './AddMovie2';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  myButtonClick = () => {
    const { onClick } = this.props;
    onClick();
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
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              type="text"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChange }
            />
          </label>
          <AddMovie2
            value={ { storyline, rating, genre } }
            onChange={ this.handleChange }
          />
          <button data-testid="send-button" type="submit" onClick={ this.myButtonClick }>
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
