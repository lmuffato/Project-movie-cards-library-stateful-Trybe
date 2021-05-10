import React from 'react';
import Proptypes from 'prop-types';

export default class Storyline extends React.Component {
  render() {
    const { storyline, changeHandler } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  storyline: Proptypes.string.isRequired,
  changeHandler: Proptypes.string.isRequired,
};
