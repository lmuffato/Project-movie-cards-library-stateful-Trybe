import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import inputs from './addForm';
import Textarea from './textArea';
import Select from './select';

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

  handleTitle = ({ target: { value, name } }) => (
    this.setState({
      [name]: value,
    })
  );

  onSubmit = () => {
    const unusedState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(unusedState);
  }

  render() {
    const { title, subtitle, imagePath, rating, storyline, genre } = this.state;
    const stateArray = [title, subtitle, imagePath, rating];
    return (
      <form
        data-testid="add-movie-form"
      >
        { inputs.map((input, index) => (
          <Input
            key={ index }
            tipo={ input.tipo }
            texto={ input.texto }
            nome={ input.nome }
            value={ stateArray[index] }
            onChange={ this.handleTitle }
            labelData={ input.labelData }
            inputData={ input.inputData }
          />
        ))}
        <Textarea
          labelText="Sinopse"
          nome="storyline"
          onChange={ this.handleTitle }
          value={ storyline }
        />
        <Select
          value={ genre }
          onChange={ this.handleTitle }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.onSubmit }
        >
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
