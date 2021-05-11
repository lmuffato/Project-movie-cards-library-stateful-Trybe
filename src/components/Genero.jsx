import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genero"
      >
        Gênero:
        <select
          id="genero"
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.defaultProps = {
  value: '',
  onChange: '',
};

Genero.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Genero;
