import React from 'react';
import PropTypes from 'prop-types';

class InputGenero extends React.Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            id="genre-input"
            data-testid="genre-input"
            name="genre"
            value={ onClick }
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}
InputGenero.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputGenero;
