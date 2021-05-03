import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { onSearchTextChange } = this.props;
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
      </form>
    );
  }
}

Form.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};
