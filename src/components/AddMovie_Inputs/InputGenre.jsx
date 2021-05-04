import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="idGenre" data-testid="genre-input-label">
        Gênero
        <select
          id="idGenre"
          data-testid="genre-input"
          type="number"
          name="genre"
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

InputGenre.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputGenre;
