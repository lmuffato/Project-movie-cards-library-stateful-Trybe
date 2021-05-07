// <AddMovie /> deve receber como prop:

// onClick, uma callback
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
    //     imagePath: '',
    //     storyline: '',
    //     rating: 0,
    //     genre: 'action',
    };
  }

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   // const value = target.type === 'checkbox'
  //   //   ? target.checkbox : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, subtitle } = this.state;

    return (
      <div>
        olá
        <form data-testid="add-movie-form">
          <label htmlFor="subtitulo" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>
          <label htmlFor="título" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          {/* <label htmlFor="caminho da imagem">caminho da imagem</label> */}
          {/* <label htmlFor="sinopse">sinopse</label> */}
          {/* <label htmlFor="avaliação">avaliação</label> */}
          {/* <label htmlFor="gênero">gênero</label> */}
        </form>
      </div>
    );
  }
}

export default AddMovie;
