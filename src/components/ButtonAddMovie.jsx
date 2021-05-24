import React from 'react';

class ButtonAddMovie extends React.Component {
  render() {
    return (
      <button
        type="submit"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

export default ButtonAddMovie;
