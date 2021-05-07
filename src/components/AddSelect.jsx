import React from 'react';
import PropTypes from 'prop-types';

class AddSelect extends React.Component {
  render() {
    const { genre } = this.props;
    const { handleGenre } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero

        <select
          onChange={ handleGenre }
          value={ genre }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}
AddSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleGenre: PropTypes.func.isRequired,
};
export default AddSelect;
