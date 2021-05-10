import React from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends React.Component {
  render() {
    const { item, callback } = this.props;
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ item }
          onChange={ callback }
          data-testid="title-input"
        />
      </label>
    );
  }
}

TitleMovie.propTypes = {
  item: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default TitleMovie;
