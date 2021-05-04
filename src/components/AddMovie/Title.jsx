import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, AddMovie } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
            value={ title }
            name="title"
            onChange={ AddMovie }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  AddMovie: PropTypes.func.isRequired,
};

export default Title;
