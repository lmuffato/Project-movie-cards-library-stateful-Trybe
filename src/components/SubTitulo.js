import React from 'react';
import PropTypes from 'prop-types';

class SubTitulo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ value }
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubTitulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubTitulo;
