import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { storyline } = this.props;
    const { handleStoryline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleStoryline }
        />
      </label>
    );
  }
}
AddStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleStoryline: PropTypes.func.isRequired,
};
export default AddStoryline;
