import React from 'react';
import Proptypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, handleOnChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="newStoryline">
        Sinopse
        <textarea
          value={ storyline }
          id="newStoryline"
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: Proptypes.string.isRequired,
  handleOnChange: Proptypes.func.isRequired,
};

export default TextArea;
