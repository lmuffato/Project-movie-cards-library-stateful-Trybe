import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="input-genre">
        Gênero
        <select
          value={ value }
          data-testid="genre-input"
          onChange={ callback }
          id="input-genre"
          name="genre"
        >
          <option value="action" data-testid="genre-option" selected>Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
}.isRequered;

export default AddGenre;
