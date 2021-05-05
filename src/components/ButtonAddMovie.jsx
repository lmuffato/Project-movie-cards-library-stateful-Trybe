import React from 'react';

class InputsAddMovie extends React.Component {
  render() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        // onClick={ () => this.hendowClick(onClick) }
      >
        Adicionar filme
      </button>
    );
  }
}

export default InputsAddMovie;
