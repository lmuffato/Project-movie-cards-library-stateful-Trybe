import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          name="title"
          onChange={ handleChange }
          className="text-input-addMovie"
          placeholder="Insira o título"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Title;
