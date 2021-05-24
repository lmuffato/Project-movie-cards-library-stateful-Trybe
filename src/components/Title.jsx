import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor={ value } data-testid="title-input-label">
        { label }
        <input
          data-testid="title-input"
          value={ value }
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Title;
