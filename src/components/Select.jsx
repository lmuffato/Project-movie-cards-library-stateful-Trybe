import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { handler, genre } = this.props;
    return (
      <label htmlFor="genre-select" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-select"
          data-testid="genre-input"
          value={ genre }
          name="genre"
          onChange={ handler }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  handler: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Select;
