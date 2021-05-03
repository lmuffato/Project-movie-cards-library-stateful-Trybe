import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
