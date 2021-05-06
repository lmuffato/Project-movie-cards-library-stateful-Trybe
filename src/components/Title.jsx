import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        {children}
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

// Source: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Title;
