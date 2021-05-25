import React from 'react';
import Proptypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { handleChange, storyline } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
          value={ storyline }
        />
      </label>
    );
  }
}

export default AddStoryline;

AddStoryline.propTypes = {
  handleChange: Proptypes.func,
  storyline: Proptypes.string,
}.isRequired;
