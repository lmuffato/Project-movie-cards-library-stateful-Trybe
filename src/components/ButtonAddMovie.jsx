import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { resetState } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ resetState }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  resetState: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
