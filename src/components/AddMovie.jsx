import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import commenceValue from './clearState';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = commenceValue;
    this.clearState = this.clearState.bind(this);
  }

  showInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
  clearState() {
    const { onClick } = this.props;
    onClick();
    this.setState(commenceValue);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.showInput } />
        <InputSubtitle value={ subtitle } onChange={ this.showInput } />
        <InputImage value={ imagePath } onChange={ this.showInput } />
        <InputStoryline value={ storyline } onChange={ this.showInput } />
        <InputRating value={ rating } onChange={ this.showInput } />
        <InputGenre value={ genre } onChange={ this.showInput } />
        <button type="submit" data-testid="send-button" onClick={ this.clearState }>
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
