import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInput extends React.Component {
  render() {
    const { getData, method, type, text, whatData } = this.props;

    return (
      <label data-testid={ `${whatData}-input-label` } htmlFor={ `${whatData}` }>
        { text }
        <input
          type={ type }
          value={ getData }
          data-testid={ `${whatData}-input` }
          onChange={ method }
          id={ `${whatData}` }
        />
      </label>
    );
  }
}

AddMovieInput.propTypes = {
  getData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  method: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  whatData: PropTypes.string.isRequired,
};

AddMovieInput.defaultProps = { type: 'text' };

/* texto, onchange, value, type */

export default AddMovieInput;
