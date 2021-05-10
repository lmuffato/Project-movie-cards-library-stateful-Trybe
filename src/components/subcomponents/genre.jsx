import React from 'react';
import Proptypes from 'prop-types';

export default class Genre extends React.Component {
  render() {
    // const { genre, changeHandler } = this.props;
    return (
      <div>
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.changeHandler }
          />
        </label>
      </div>
    );
  }
}

Genre.propTypes = {
  genre: Proptypes.string,
  changeHandler: Proptypes.string,
}
