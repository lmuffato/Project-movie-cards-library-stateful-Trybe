import React from 'react';

class MovieButtonAdd extends React.Component {
  render() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        // onClick={ state }
      >
        Adicionar filme
      </button>
    );
  }
}

export default MovieButtonAdd;
