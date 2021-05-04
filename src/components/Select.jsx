import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { callback, value } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            onChange={ callback }
            data-testid="genre-input"
            value={ value }
            name="genre"
            id="genre"
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

Select.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
