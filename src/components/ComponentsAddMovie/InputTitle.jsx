import React from 'react';
import Proptypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, handleOnChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="newTitle">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          id="newTitle"
          data-testid="title-input"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: Proptypes.string.isRequired,
  handleOnChange: Proptypes.func.isRequired,

};

export default InputTitle;
