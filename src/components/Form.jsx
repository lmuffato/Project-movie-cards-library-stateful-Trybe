import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const {
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="text-input"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          htmlFor="checkbox-input"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
