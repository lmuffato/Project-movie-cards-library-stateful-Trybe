import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { defaultState, onClick, movieList, newMovie } = this.props;
    return (
      <button
        type="submit"
        onClick={ (event) => {
          event.preventDefault();
          onClick(movieList, newMovie);
          defaultState();
        } }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  defaultState: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  movieList: PropTypes.arrayOf(PropTypes.object).isRequired,
  newMovie: PropTypes.objectOf(PropTypes.node).isRequired,
};

Button.defaultProps = {
  onClick: (event) => event.preventDefault(),
};

export default Button;
