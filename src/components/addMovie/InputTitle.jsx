import React from 'react';
import PropTypes from 'prop-types';

export default class InputTitle extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="search-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
