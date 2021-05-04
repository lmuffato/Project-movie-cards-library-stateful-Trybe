import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <div>
        <label
          htmlFor="text-input-1"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="text-input-1"
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default Input;
