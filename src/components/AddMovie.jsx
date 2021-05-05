// implement AddMovie component here
import React from 'react';
import Proptypes from 'prop-types';
import TextArea from './ComponentsAddMovie/textArea';
import InputImg from './ComponentsAddMovie/InputImg';
import InputSubtitle from './ComponentsAddMovie/Input_subtitle';
import InputTitle from './ComponentsAddMovie/InputTitle';
import InputNumber from './ComponentsAddMovie/Input_number';
import Select from './ComponentsAddMovie/Select';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleOnChange({ target }) {
    const { value, name } = target;
    this.setState(({
      [name]: value,
    }));
  }

  handleClick = (state) => {
    const { onClick } = this.props;
    onClick(state);
    this.setState(({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle title={ title } handleOnChange={ this.handleOnChange } />
          <InputSubtitle subtitle={ subtitle } handleOnChange={ this.handleOnChange } />
          <InputImg imagePath={ imagePath } handleOnChange={ this.handleOnChange } />
          <TextArea storyline={ storyline } handleOnChange={ this.handleOnChange } />
          <InputNumber rating={ rating } handleOnChange={ this.handleOnChange } />
          <Select genre={ genre } handleOnChange={ this.handleOnChange } />
        </form>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => this.handleClick(this.state) }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default AddMovie;
