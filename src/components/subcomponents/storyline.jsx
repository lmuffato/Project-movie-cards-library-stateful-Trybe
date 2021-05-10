import React from 'react';
import Proptypes from 'prop-types';

export default class Storyline extends React.Component {
  render() {
    const { name, onChange } = this.props;
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
            value={ name }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  name: Proptypes.string.isRequired,
  onChange: Proptypes.string.isRequired,
};
