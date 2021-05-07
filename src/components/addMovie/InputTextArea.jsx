import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="search-sinopse" data-testid="storyline-input-label">
        Sinopse
        <input
          name={ searchText }
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
