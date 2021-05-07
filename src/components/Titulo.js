import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Título" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ value }
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Titulo;
