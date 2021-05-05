import React from 'react';
import PropTypes from 'prop-types';
import genders from './movieTypes';

class Select2 extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        data-testid="select-input-label"
        htmlFor="genero"
        className="label"
      >
        Filtrar por gênero
        <div className="select">
          <select
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            {genders.map((gender, index) => (
              <option
                key={ index }
                data-testid="select-option"
                value={ gender.valor }
                name={ gender.valor }
              >
                {gender.name}
              </option>))}
          </select>
        </div>
      </label>);
  }
}

Select2.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Select2;
