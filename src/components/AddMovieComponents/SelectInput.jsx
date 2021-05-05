import React, { Component } from 'react';
import PropTypes from 'prop-types';

const moviesGenre = {
  Ação: 'action',
  Comédia: 'comedy',
  Suspense: 'thriller',
};

const moviesGenreValues = Object.values(moviesGenre).map((type) => type);

class SelectInput extends Component {
  render() {
    const { handInputs, value } = this.props;
    return (
      <div>
        <label
          htmlFor="SelectInput"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            id="SelectInput"
            name="genre"
            type="string"
            onChange={ handInputs }
            value={ value }
            data-testid="genre-input"
          >
            { Object.keys(moviesGenre).map((currgenre, index) => (
              <option
                key={ index }
                onChange={ handInputs }
                value={ moviesGenreValues[index] }
                data-testid="genre-option"
              >
                {currgenre}
              </option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

SelectInput.propTypes = {
  handInputs: PropTypes.func,
  value: PropTypes.number,
}.isRequired;

export default SelectInput;
