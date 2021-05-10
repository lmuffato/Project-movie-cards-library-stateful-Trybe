import React from 'react';
import Proptypes from 'prop-types';

export default class Genre extends React.Component {
  render() {
    const { genre, changeHandler } = this.props;
    return (
      <div>
        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            id="genre"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ changeHandler }
          >
            <option
              value="action"
              data-testid="genre-option"
            >
              Ação
            </option>
            <option
              value="comedy"
              data-testid="genre-option"
            >
              Comédia
            </option>
            <option
              value="thriller"
              data-testid="genre-option"
            >
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

Genre.propTypes = {
  genre: Proptypes.string.isRequired,
  changeHandler: Proptypes.string.isRequired,
};
