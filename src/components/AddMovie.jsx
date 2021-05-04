import React from 'react';
import PropTypes from 'prop-types';

// subtitle: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
// title: guarda o título preenchido no formulário por quem usa a aplicação;
// imagePath: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
// storyline: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
// rating: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
// genre
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
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        AddMovie
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
