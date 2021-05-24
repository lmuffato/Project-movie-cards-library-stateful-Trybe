import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor={ value } data-testid="genre-input-label">
        { label }
        <select
          data-testid="genre-input"
          type="select"
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

Genre.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Genre;
