import React from 'react';
import PropTypes from 'prop-types';

class GenreOption extends React.Component {
  render() {
    const { change, genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          onChange={ change }
          value={ genre }
          name="genre"
          data-testid="genre-input"
        >
          <option
            data-testid="genre-option"
            name="genre"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            name="genre"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            name="genre"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreOption.defaultProps = {
  change: PropTypes.func,
  genre: PropTypes.string,
};

GenreOption.propTypes = {
  change: PropTypes.func,
  genre: PropTypes.string,
};

export default GenreOption;
