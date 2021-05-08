import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { method } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ method }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = { method: PropTypes.func.isRequired };

export default AddMovieButton;
