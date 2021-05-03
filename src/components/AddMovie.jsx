import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = ({ target }) => { // Como a handleCHange foi feita com => function, não é necessário fazer o bind no constructor.
  // Estrutura montada com base na aula 02 do bloco 12. https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/formularios-no-react/537fc0f4-1be1-4cd8-8333-9432fa722672/conteudos/7d511de0-fe64-4efc-bf49-29b2d57bbac9/event-handlers-genericos/dde8c3be-8ca4-45c7-a162-02a916d3c50d?use_case=side_bar
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ imagePath }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            value={ storyline }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
