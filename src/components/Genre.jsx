import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre-input"
      >
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
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

Genre.defaultProps = {
  value: '',
  onChange: '',
};

Genre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Genre;
