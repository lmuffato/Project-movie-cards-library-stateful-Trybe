import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ value }
            onChange={ onChange }
            id="genre"
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <br />
      </div>
    );
  }
}

export default InputGenre;

InputGenre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

// fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
