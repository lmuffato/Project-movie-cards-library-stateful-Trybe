import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import TextAreaField from './TextAreaField';

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

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Field
            label="Título"
            name="title"
            type="text"
            value={ title }
            data="title-input"
            callback={ this.handleChange }
          />
          <Field
            label="Subtítulo"
            name="subtitle"
            type="text"
            value={ subtitle }
            data="subtitle-input"
            callback={ this.handleChange }
          />
          <Field
            label="Imagem"
            name="imagePath"
            type="text"
            value={ imagePath }
            data="image-input"
            callback={ this.handleChange }
          />
          <TextAreaField
            label="Sinopse"
            name="storyline"
            value={ storyline }
            data="storyline-input"
            callback={ this.handleChange }
          />
          <Field
            label="Avaliação"
            name="rating"
            type="number"
            value={ rating }
            data="rating-input"
            callback={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
