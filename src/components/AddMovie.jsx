// 6 - Crie um componente chamado <AddMovie />
// Esse componente renderizará um formulário que permite adicionar na biblioteca um novo cartão de filme, dadas as seguintes informações do novo filme:

// subtítulo
// título
// caminho da imagem
// sinopse
// avaliação
// gênero
// <AddMovie /> deve receber como prop:

// onClick, uma callback
import React from 'react';

class AddMovie extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }
  render() {
    return (
      <div>
        olá
        <form data-testid="add-movie-form">
          {/* <label htmlFor="subtítulo">subtítulo</label>
          <label htmlFor="título">título</label>
          <label htmlFor="caminho da imagem">caminho da imagem</label>
          <label htmlFor="sinopse">sinopse</label>
          <label htmlFor="avaliação">avaliação</label>
          <label htmlFor="gênero">gênero</label> */}
        </form>
      </div>
    );
  }
}

export default AddMovie;
