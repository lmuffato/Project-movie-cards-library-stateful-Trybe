import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="search-subtitle" data-testid="image-input-label">
        Imagem
        <input
          name={ searchText }
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Image.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
