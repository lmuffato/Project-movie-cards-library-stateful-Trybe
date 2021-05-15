import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          value={ title }
          data-testid="title-input"
          onChange={ onChange }
          type="text"
          name="title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
