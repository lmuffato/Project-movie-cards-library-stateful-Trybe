import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      labels: {
        title: 'Títuto',
        subtitle: 'Subtítulo',
        imagePath: 'Imagem',
        storyline: 'Sinopse',
        rating: 'Avaliação',
        genre: 'Gênero',
        labels: '',
      },
    };
  }

  handle = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  generateInputs = () => {
    const { labels } = this.state;
    const inputs = Object.keys(this.state).reduce((acc, input) => {
      const { [input]: text } = labels;
      const type = input === 'storyline' ? 'textarea' : 'text';
      const { [input]: value } = this.state;
      if (input !== 'labels' && input !== 'genre') {
        const inputPros = {
          label: {
            'data-testid': `${input}-input-label`,
          },
          input: {
            name: input,
            type,
            value,
            onChange: this.handle,
            'data-testid': `${input}-input`,
          },
          text,
        };
        acc.push(inputPros);
      }
      return acc;
    }, []);
    return inputs;
  };

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.generateInputs().map((n) => (
          // eslint-disable-next-line react/jsx-curly-spacing
          <label htmlFor={ n.input.name } { ...n.label } key={`label-${n.input.name}`}>
            {n.text}
            {
              n.input.type !== 'textarea'
                ? <input { ...n.input } key={ `Input-${n.input.name}` } />
                : <textarea { ...n.input } key={ `Input-${n.input.name}` } />
            }
          </label>
        ))}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
