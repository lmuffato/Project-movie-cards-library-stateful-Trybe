import React, { Component } from 'react';
import { string, func } from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          onChange={ onChange }
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

SelectGenre.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
};

export default SelectGenre;
