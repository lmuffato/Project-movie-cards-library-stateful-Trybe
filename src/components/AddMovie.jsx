import React from 'react';
// import PropTypes from 'prop-types';
import InputTitle from './InputsTitle';
import InputSubtitle from './InputSubtitle';
import InputImagem from './InputImagem';
import InputSinopse from './InputSinopse';
import InputAvaliacao from './InputAvaliacao';
import InputGenero from './InputGenero';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends React.Component {
//   constructor() {
//     super();
//     const {
//       subtitle, title,
//       imagePath, storyline,
//       rating, genre } = this.state;
//   }

  render() {
    return (
      <form data-testid="add-movie-form">
        <InputTitle />
        <InputSubtitle />
        <InputImagem />
        <InputSinopse />
        <InputAvaliacao />
        <InputGenero />
        <ButtonAddMovie />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
export default AddMovie;
