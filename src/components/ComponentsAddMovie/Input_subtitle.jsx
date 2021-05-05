import React from 'react';
import Proptypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle, handleOnChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="newSubititle">
        Subtítulo
        <input
          type="text"
          id="newSubititle"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: Proptypes.string.isRequired,
  handleOnChange: Proptypes.func.isRequired,
};

export default InputSubtitle;
