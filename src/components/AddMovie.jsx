// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    // this.handleChange = this.state.addMovie.bind(this);
  }

  // handleChange({ target }) { // trazendo o target como um objeto
  //   const { name } = target; // desconstrução do target
  //   const value = target.type === 'checkbox' ? target.checked : target.value // Lógica para checkbox
  //   console.log(target.value);
  //   this.setState({ // Indica o valor do estado
  //     [name]: value, // name == estadoFavorito -> estadoFavorito:value
  //   });
  // }

  render() {
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <button onClick={ onClick } type="button">Adicionar filme</button>
      // <form>
      //   <label htmlFor="title">
      //     Titulo
      //     <input
      //       type="text"
      //       name="title"
      //       value={ title }
      //       onChange={ console.log('bunda') }
      //     />
      //   </label>
      // </form>
    );
  }
}

export default AddMovie;
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired, // Indica que a propriedade é essencial (se não for indicada, retorna erro)
};
