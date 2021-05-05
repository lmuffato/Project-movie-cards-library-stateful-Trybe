import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { handleAddMovie, title } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="Título">
        Título
        <input
          onChange={ handleAddMovie }
          data-testid="title-input"
          value={ title }
          type="text"
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  handleAddMovie: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default InputTitle;
