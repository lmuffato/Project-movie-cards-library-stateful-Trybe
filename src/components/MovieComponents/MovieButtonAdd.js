import React from 'react';
import propTypes from 'prop-types';

class MovieButtonAdd extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default MovieButtonAdd;

MovieButtonAdd.propTypes = {
  onClick: propTypes.func.isRequired,
};
